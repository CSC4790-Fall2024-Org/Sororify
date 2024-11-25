from django.db import models
from django.urls import reverse # Used in get_absolute_url() to get URL for specified ID
from django.contrib.auth.models import User # Built-in User model
from django.db.models import UniqueConstraint # Constrains fields to unique values
from django.db.models.functions import Lower # Returns lower cased value of field


class Profile(models.Model):
    ROLE_CHOICES = [
        ('member', 'Member'),
        ('pnm', 'PNM'),
        ('chair', 'Chair'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES) # e.g., 'admin', 'member', 'pnm'

    def __str__(self):
        return self.user.username