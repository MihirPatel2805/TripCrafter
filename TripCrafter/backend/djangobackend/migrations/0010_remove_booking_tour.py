# Generated by Django 4.2.3 on 2023-09-29 10:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('djangobackend', '0009_alter_booking_tour'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='booking',
            name='tour',
        ),
    ]
