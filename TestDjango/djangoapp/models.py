from django.db import models
from django.urls import reverse # Used in get_absolute_url() to get URL for specified ID
from django.contrib.auth.models import User # Built-in User model
from django.db.models import UniqueConstraint # Constrains fields to unique values
from django.db.models.functions import Lower # Returns lower cased value of field

