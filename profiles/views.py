from django.shortcuts import render, get_object_or_404

# Create your views here.
from .models import Profile


def profile_detail_view(request, username, *args, **kwargs):
    get_object_or_404(Profile, user__username=username)
    return render(request, "pages/react.html")
