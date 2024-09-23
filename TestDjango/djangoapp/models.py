from django.db import models
from django.urls import reverse # Used in get_absolute_url() to get URL for specified ID

from django.db.models import UniqueConstraint # Constrains fields to unique values
from django.db.models.functions import Lower # Returns lower cased value of field

""""{"first name": fname, "last name": lname, "state": hometown_state, 
   "county": third_element, "hometown": city, "major": major, 
   "involvement": campus_involvement, "activities": activities}"""

class Involvement(models.Model):
    
    name = models.CharField(
        max_length=200,
        unique=True,
        help_text="Enter clubs or orgs you're involved in on campus"
    )

    def __str__(self):
        """String for representing the Model object."""
        return self.name

    def get_absolute_url(self):
        """Returns the url to access a particular involvement instance."""
        return reverse('involvement-detail', args=[str(self.id)])
    
class Activities(models.Model):
    """Model representing a book genre."""
    name = models.CharField(
        max_length=200,
        unique=True,
        help_text="Enter hobbies or activities you enjoy"
    )

    def __str__(self):
        """String for representing the Model object."""
        return self.name

    def get_absolute_url(self):
        """Returns the url to access a particular activity instance."""
        return reverse('activities-detail', args=[str(self.id)])


class PNM(models.Model):
        """Model representing a PNM."""
        firstname = models.CharField(max_length=200, default='SOME STRING')
        lastname = models.CharField(max_length=200, default='SOME STRING')
        state = models.CharField(max_length=200, default='SOME STRING')
        county = models.CharField(max_length=200, default='SOME STRING')
        hometown = models.CharField(max_length=200, default='SOME STRING')
        major = models.CharField(max_length=200, default='SOME STRING')
        involvement = models.ManyToManyField(
            Involvement, help_text="Select campus involement for this PNM")
        activites = models.ManyToManyField(
            Activities, help_text="Select hobbies or activities for this PNM")

        def __str__(self):
            """String for representing the Model object."""
            return self.firstname

        def get_absolute_url(self):
            """Returns the URL to access a detail record for this book."""
            return reverse('pnm-detail', args=[str(self.id)])