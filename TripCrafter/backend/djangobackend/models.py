from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

from django.contrib.auth.models import User
from django.utils import timezone

  # Import your custom user model if you have one
class Tour(models.Model):
    title = models.CharField(max_length=255, unique=True)
    city = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    distance = models.FloatField()
    photo = models.ImageField(upload_to='tours/')  # Adjust the 'upload_to' path as needed
    desc = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    max_group_size = models.PositiveIntegerField()

    featured = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title



class Booking(models.Model):
    # Foreigrn Key
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE,related_name='bookingtitle')
    full_name = models.CharField(max_length=255)
    age = models.PositiveIntegerField()
    mobile_number = models.CharField(max_length=15)
    num_of_people = models.PositiveIntegerField()
    booking_date = models.DateField()
    gender_choices = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
    ]
    gender = models.CharField(max_length=10, choices=gender_choices)
    # Add a status field with a default value of 'Not Completed'

    status = models.CharField(max_length=15, default='pending')

    def __str__(self):
        return f"Booking by {self.user.username} on {self.booking_date}"

    def save(self, *args, **kwargs):
        # Check if the booking date is in the past
        if self.booking_date < timezone.now().date():
            self.status = 'Completed'
        super().save(*args, **kwargs)
