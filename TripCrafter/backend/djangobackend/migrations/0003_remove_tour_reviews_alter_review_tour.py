# Generated by Django 4.2.3 on 2023-09-04 14:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("djangobackend", "0002_review_tour_review_tour"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="tour",
            name="reviews",
        ),
        migrations.AlterField(
            model_name="review",
            name="tour",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="reviews",
                related_query_name="review",
                to="djangobackend.tour",
            ),
        ),
    ]
