from django.db import models
from django.urls import reverse # Used in get_absolute_url() to get URL for specified ID

from django.db.models import UniqueConstraint # Constrains fields to unique values
from django.db.models.functions import Lower # Returns lower cased value of field

class Hometown(models.Model):
    """Model representing a book genre."""
    name = models.CharField(
        max_length=200,
        unique=True,
        help_text="Enter hometown name (e.g. Atlanta, GA)"
    )

    def __str__(self):
        """String for representing the Model object."""
        return self.name

    def get_absolute_url(self):
        """Returns the url to access a particular genre instance."""
        return reverse('hometown-detail', args=[str(self.id)])


class PNM(models.Model):
        """Model representing a PNM."""
        title = models.CharField(max_length=200)
        # Foreign Key used because book can only have one author, but authors can have multiple books.
        # Author as a string rather than object because it hasn't been declared yet in file.

        summary = models.TextField(
            max_length=1000, help_text="Enter PNM name")


        # ManyToManyField used because genre can contain many books. Books can cover many genres.
        # Genre class has already been defined so we can specify the object above.
        hometown = models.ManyToManyField(
            Hometown, help_text="Select a hometown for this PNM")

        def __str__(self):
            """String for representing the Model object."""
            return self.title

        def get_absolute_url(self):
            """Returns the URL to access a detail record for this book."""
            return reverse('pnm-detail', args=[str(self.id)])