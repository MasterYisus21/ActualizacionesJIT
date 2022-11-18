# Generated by Django 4.0.4 on 2022-11-17 21:20

import apiSolicitudesApp.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiSolicitudesApp', '0002_rename_nuero_radicado_solicitud_numero_radicado'),
    ]

    operations = [
        migrations.AlterField(
            model_name='solicitud',
            name='numero_radicado',
            field=models.CharField(default=apiSolicitudesApp.models.increment_entrada_number, max_length=25, primary_key=True, serialize=False, unique=True),
        ),
    ]
