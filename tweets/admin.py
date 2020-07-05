from django.contrib import admin

from .models import Tweet, TweetLike
# Register your models here.


class TweetLikeInline(admin.TabularInline):
    '''Tabular Inline View for TweetLike'''

    model = TweetLike


class TweetAdmin(admin.ModelAdmin):
    inlines = [TweetLikeInline]
    list_display = ['__str__', 'user', 'created', 'get_likes']
    search_fields = ['content', 'user__username', 'user__email']
    list_filter = ['created']

    class Meta:
        model = Tweet

    def get_likes(self, tweet):
        return tweet.likes.count()
    get_likes.short_description = 'Likes'


admin.site.register(Tweet, TweetAdmin)
