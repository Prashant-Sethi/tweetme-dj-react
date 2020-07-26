from django.urls import path, include

from .views import (
    user_follow_view
)

urlpatterns = [
    path('<str:username>/follow/', user_follow_view),
]
