from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone

User = get_user_model()
# Create your models here.


class FollowerRelation(models.Model):
    profile = models.ForeignKey("Profile", on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    liked_on = models.DateTimeField(default=timezone.now)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    location = models.CharField(max_length=220, null=True, blank=True)
    bio = models.TextField(blank=True, null=True)
    followers = models.ManyToManyField(
        User, related_name='following',
        through=FollowerRelation,
        blank=True)

    def __str__(self):
        return self.user.username
