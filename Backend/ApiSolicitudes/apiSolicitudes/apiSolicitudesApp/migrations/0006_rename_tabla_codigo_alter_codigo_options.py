# Generated by Django 4.1.3 on 2023-01-25 17:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('apiSolicitudesApp', '0005_alter_tabla_options'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='tabla',
            new_name='Codigo',
        ),
        migrations.AlterModelOptions(
            name='codigo',
            options={'verbose_name': 'Codigo', 'verbose_name_plural': 'Codigos'},
        ),
    ]
