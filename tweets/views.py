from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from .models import Tweet
from .serializers import (
    TweetSerializer,
    TweetActionSerializer,
    TweetCreateSerializer
)

# Create your views here.


def home_view(request, *args, **kwargs):
    username = None
    if request.user.is_authenticated:
        username = request.user.username
    return render(request, "pages/home.html", context={"username": username}, status=200)


@api_view(['GET'])
def tweet_list_view(request, *args, **kwargs):
    query_set = Tweet.objects.all()
    serializer = TweetSerializer(query_set, many=True)
    return Response(serializer.data, status=200)


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
        elif action == 'unlike':
            tweet.likes.remove(request.user)
        elif action == 'retweet':
            tweet = Tweet.objects.create(
                user=request.user,
                parent=tweet,
                content=content
            )
        serializer = TweetSerializer(tweet)
        return Response(serializer.data, status=200)
    return Response({}, status=200)
