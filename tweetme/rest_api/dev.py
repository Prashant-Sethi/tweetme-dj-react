from django.contrib.auth import get_user_model
from rest_framework.authentication import BasicAuthentication

User = get_user_model()


class DevAuthentication(BasicAuthentication):
    def authenticate(self, request):
        user = User.objects.get(username='testuser')
        return (user, None)
