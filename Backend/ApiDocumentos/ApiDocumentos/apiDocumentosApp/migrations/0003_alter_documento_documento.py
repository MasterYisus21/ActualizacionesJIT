# Generated by Django 4.1.3 on 2023-02-09 19:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiDocumentosApp', '0002_alter_documento_nombre'),
    ]

    operations = [
        migrations.AlterField(
            model_name='documento',
            name='documento',
            field=models.FileField(blank=True, max_length=220, null=True, upload_to='documentos/'),
        ),
    ]
