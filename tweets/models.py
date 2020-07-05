from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone

User = get_user_model()

# Create your models here.


class TweetLike(models.Model):
    tweet = models.ForeignKey("Tweet", on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    liked_on = models.DateTimeField(default=timezone.now)


class Tweet(models.Model):
    """Model definition for Tweet."""

    parent = models.ForeignKey(
        "self", null=True, on_delete=models.SET_NULL)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.CharField(max_length=240, blank=True, null=True)
    created = models.DateTimeField(default=timezone.now)
    likes = models.ManyToManyField(
        User, related_name='liked_by', through=TweetLike)

    class Meta:
        """Meta definition for Tweet."""

        verbose_name = 'Tweet'
        verbose_name_plural = 'Tweets'
        ordering = ['-id']

    @property
    def is_retweet(self):
        return self.parent != None
