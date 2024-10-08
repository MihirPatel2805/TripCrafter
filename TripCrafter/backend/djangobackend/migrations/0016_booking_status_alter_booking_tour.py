# Generated by Django 4.2.3 on 2023-10-05 15:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("djangobackend", "0015_booking_tour"),
    ]

    operations = [
        migrations.AddField(
            model_name="booking",
            name="status",
            field=models.CharField(default="Not Completed", max_length=15),
        ),
        migrations.AlterField(
            model_name="booking",
            name="tour",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="bookingtitle",
                to="djangobackend.tour",
            ),
        ),
    ]
