# Generated by Django 4.0.4 on 2022-11-21 20:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('apiSolicitudesApp', '0003_remove_relacion_persona_solicitud_nombre'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='documento',
            name='solicitud_id',
        ),
    ]
