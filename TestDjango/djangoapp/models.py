from django.db import models
from django.urls import reverse # Used in get_absolute_url() to get URL for specified ID

from django.db.models import UniqueConstraint # Constrains fields to unique values
from django.db.models.functions import Lower # Returns lower cased value of field

class Genre(models.Model):
    """Model representing a book genre."""
    name = models.CharField(
        max_length=200,
        unique=True,
        help_text="Enter a book genre (e.g. Science Fiction, French Poetry etc.)"
    )

    def __str__(self):
        """String for representing the Model object."""
        return self.name

    def get_absolute_url(self):
        """Returns the url to access a particular genre instance."""
        return reverse('genre-detail', args=[str(self.id)])

class Meta:
        constraints = [
            UniqueConstraint(
                Lower('name'),
                name='genre_name_case_insensitive_unique',
                violation_error_message = "Genre already exists (case insensitive match)"
            ),
        ]
class Book(models.Model):
        """Model representing a book (but not a specific copy of a book)."""
        title = models.CharField(max_length=200)
        # Foreign Key used because book can only have one author, but authors can have multiple books.
        # Author as a string rather than object because it hasn't been declared yet in file.

        summary = models.TextField(
            max_length=1000, help_text="Enter a brief description of the book")
        isbn = models.CharField('ISBN', max_length=13,
                            unique=True,
                            help_text='13 Character <a href="https://www.isbn-international.org/content/what-isbn'
                                      '">ISBN number</a>')

        # ManyToManyField used because genre can contain many books. Books can cover many genres.
        # Genre class has already been defined so we can specify the object above.
        genre = models.ManyToManyField(
            Genre, help_text="Select a genre for this book")

        def __str__(self):
            """String for representing the Model object."""
            return self.title

        def get_absolute_url(self):
            """Returns the URL to access a detail record for this book."""
            return reverse('book-detail', args=[str(self.id)])