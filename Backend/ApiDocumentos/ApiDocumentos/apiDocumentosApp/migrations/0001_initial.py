# Generated by Django 4.1.3 on 2022-12-09 22:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Documento',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('nombre', models.CharField(blank=True, default='nombre', max_length=50)),
                ('fecha', models.DateField(auto_now=True)),
                ('documento', models.FileField(blank=True, null=True, upload_to='documentos/')),
                ('expediente', models.CharField(blank=True, max_length=20)),
                ('estado', models.BooleanField(blank=True, default='', null=True)),
            ],
            options={
                'verbose_name': 'Documento',
                'verbose_name_plural': 'Documento',
            },
        ),
    ]
