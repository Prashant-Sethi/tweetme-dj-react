from django.db import models
from django.db.models import Q
from django.contrib.auth import get_user_model
from django.utils import timezone

User = get_user_model()

# Create your models here.


class TweetLike(models.Model):
    tweet = models.ForeignKey("Tweet", on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    liked_on = models.DateTimeField(default=timezone.now)


class TweetQuerySet(models.QuerySet):
    def feed(self, user):
        followed_users_ids = user.following.values_list('user__id', flat=True)
        q_user = Q(user=user)
        q_following = Q(user__id__in=followed_users_ids)

        return self.filter(
            q_user | q_following
        ).distinct().order_by('-created')


class TweetManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return TweetQuerySet(self.model, using=self._db)

    def feed(self, user):
        return self.get_queryset().feed(user)


class Tweet(models.Model):
    """Model definition for Tweet."""

    parent = models.ForeignKey(
        "self", null=True, on_delete=models.SET_NULL)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.CharField(max_length=240, blank=True, null=True)
    created = models.DateTimeField(default=timezone.now)
    likes = models.ManyToManyField(
        User, related_name='liked_by', through=TweetLike)

    objects = TweetManager()

    class Meta:
        """Meta definition for Tweet."""

        verbose_name = 'Tweet'
        verbose_name_plural = 'Tweets'
        ordering = ['-id']

    @property
    def is_retweet(self):
        return self.parent != None
