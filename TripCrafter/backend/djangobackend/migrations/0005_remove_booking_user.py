# Generated by Django 4.2.3 on 2023-09-05 09:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("djangobackend", "0004_booking"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="booking",
            name="user",
        ),
    ]
