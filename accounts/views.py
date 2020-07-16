from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout, authenticate

# Create your views here.


def login_view(request, *args, **kwargs):
    form = AuthenticationForm(request, data=request.POST or None)
    if form.is_valid():
        user = form.get_user()
        login(request, user)
    context = {
        "form": form,
        "title": "Login",
        "btn_label": "Login"
    }
    return render(request, 'accounts/auth.html', context)


def register_view(request, *args, **kwargs):
    form = UserCreationForm(request.POST or None)
    if form.is_valid():
        user = form.save(commit=True)
        user.set_password(form.cleaned_data.get("password1"))
    context = {
        "form": form,
        "title": "Create your account",
        "btn_label": "Register"
    }
    return render(request, 'accounts/auth.html', context)


def logout_view(request, *args, **kwargs):
    if request.method == "POST":
        logout(request)
    context = {
        "form": None,
        "title": "Logout",
        "description": "Are you sure you want to logout?",
        "btn_label": "Click to confirm"
    }
    return render(request, 'accounts/auth.html', context)
