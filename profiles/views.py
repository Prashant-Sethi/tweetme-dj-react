from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required

# Create your views here.
from .models import Profile
from .forms import ProfileForm


def profile_detail_view(request, username, *args, **kwargs):
    get_object_or_404(Profile, user__username=username)
    return render(request, "pages/react.html")


@login_required
def profile_update_view(request, *args, **kwargs):
    user = request.user
    user_data = {
        'first_name': user.first_name,
        'last_name': user.last_name,
        'email': user.email,
    }
    profile = user.profile
    form = ProfileForm(request.POST or None,
                       instance=profile, initial=user_data)
    if form.is_valid():
        profile_obj = form.save(commit=False)
        form_data = form.cleaned_data
        user.first_name = form_data.get('first_name')
        user.last_name = form_data.get('last_name')
        user.email = form_data.get('email')
        profile_obj.save()
        user.save()
    title = f'Hello, {f"{user.first_name} {user.last_name}" if user.first_name else user.username}'
    context = {
        'form': form,
        'btn_label': 'Save',
        'title': title,
        'description': 'Update Your Profile'
    }
    return render(request, 'profiles/update.html', context)
