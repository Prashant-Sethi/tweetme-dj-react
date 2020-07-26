from django.urls import path

from .views import profile_detail_view, profile_update_view

urlpatterns = [
    path('update/', profile_update_view, name='profile-update-view'),
    path('<str:username>/', profile_detail_view, name='profile-view'),
]
