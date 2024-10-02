from django.urls import path
from . import views

urlpatterns = [
    # ... other url patterns ...
    path('api/permissions', views.get_user_permissions, name='get_user_permissions'),
]