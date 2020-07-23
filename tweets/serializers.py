from django.conf import settings
from rest_framework import serializers

from .models import Tweet

MAX_TWEET_LENGTH = settings.MAX_TWEET_LENGTH
TWEET_ACTION_OPTIONS = settings.TWEET_ACTION_OPTIONS


class TweetActionSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    action = serializers.CharField()
    content = serializers.CharField(allow_blank=True, required=False)

    def validate_action(self, action):
        action = action.lower().strip()
        if action not in TWEET_ACTION_OPTIONS:
            raise serializers.ValidationError('Invalid Action')
        return action


class TweetCreateSerializer(serializers.ModelSerializer):
    likes = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Tweet
        fields = ['id', 'content', 'likes']

    def validate_content(self, content):
        if len(content) > MAX_TWEET_LENGTH:
            raise serializers.ValidationError("This tweet is too long")
        return content

    def get_likes(self, tweet):
        return tweet.likes.count()


class TweetSerializer(serializers.ModelSerializer):
    likes = serializers.SerializerMethodField(read_only=True)
    parent = TweetCreateSerializer(read_only=True)
    user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Tweet
        fields = ['id', 'user', 'content', 'created',
                  'likes', 'is_retweet', "parent"]

    def get_likes(self, tweet):
        return tweet.likes.count()

    def get_user(self, tweet):
        return tweet.user.username
