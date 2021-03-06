from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from tweets.models import Tweet

from tweets.serializers import (
    TweetSerializer,
    TweetActionSerializer,
    TweetCreateSerializer
)


def get_paginated_queryset_response(queryset, request):
    paginator = PageNumberPagination()
    paginator.page_size = 10
    paginated_queryset = paginator.paginate_queryset(queryset, request)
    serializer = TweetSerializer(paginated_queryset, many=True)
    return paginator.get_paginated_response(serializer.data)


@api_view(['GET'])
def tweet_list_view(request, *args, **kwargs):
    query_set = Tweet.objects.all()
    # user = request.user
    # if user.is_authenticated:
    #     query_set = query_set.filter(user=user)
    return get_paginated_queryset_response(query_set, request)


@api_view(['GET'])
def tweet_list_user_view(request, username, *args, **kwargs):
    query_set = Tweet.objects.filter(user__username__iexact=username)
    return get_paginated_queryset_response(query_set, request)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def tweet_feed_view(request, *args, **kwargs):
    query_set = Tweet.objects.feed(request.user)
    return get_paginated_queryset_response(query_set, request)


@api_view(['GET'])
def tweet_detail_view(request, tweet_id, *args, **kwargs):
    query_set = Tweet.objects.filter(id=tweet_id)
    if not query_set:
        return Response({}, status=404)
    tweet = query_set.first()
    serializer = TweetSerializer(tweet)
    return Response(serializer.data, status=200)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def tweet_create_view(request, *args, **kwargs):
    serializer = TweetCreateSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user)
        return Response(serializer.data, status=201)
    return Response({}, status=400)


@api_view(['DELETE', 'POST'])
@permission_classes([IsAuthenticated])
def tweet_delete_view(request, tweet_id, *args, **kwargs):
    query_set = Tweet.objects.filter(id=tweet_id)
    if not query_set:
        return Response({}, status=404)
    query_set = query_set.filter(user=request.user)
    if not query_set:
        return Response({'message': 'You cannot delete this tweet'}, status=401)
    tweet = query_set.first()
    tweet.delete()
    return Response({'message': 'Deleted tweet'}, status=200)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def tweet_action_view(request, *args, **kwargs):
    serializer = TweetActionSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        data = serializer.validated_data
        tweet_id = data.get('id')
        action = data.get('action')
        content = data.get('content')
        query_set = Tweet.objects.filter(id=tweet_id)
        if not query_set:
            return Response({}, status=404)
        tweet = query_set.first()
        if action == 'like':
            tweet.likes.add(request.user)
            status = 200
        elif action == 'unlike':
            tweet.likes.remove(request.user)
            status = 200
        elif action == 'retweet':
            tweet = Tweet.objects.create(
                user=request.user,
                parent=tweet,
                content=content
            )
            status = 201
        serializer = TweetSerializer(tweet)
        return Response(serializer.data, status=status)
    return Response({}, status=200)
