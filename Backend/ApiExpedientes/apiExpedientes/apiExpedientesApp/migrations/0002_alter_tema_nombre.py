# Generated by Django 4.1.3 on 2023-01-30 15:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiExpedientesApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tema',
            name='nombre',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]
