from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from profiles.models import Profile

User = get_user_model()


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_follow_view(request, username, *args, **kwargs):
    follower = request.user
    following = get_object_or_404(User, username=username)
    following = following.profile
    if request.method == 'POST':
        data = request.data or {}
        action = data.get('action', None)
        if action == 'follow':
            following.followers.add(follower)
        elif action == 'unfollow':
            following.followers.remove(follower)
    return Response({'count': following.followers.count()}, status=200)
