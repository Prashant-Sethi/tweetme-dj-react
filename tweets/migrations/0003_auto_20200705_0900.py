# Generated by Django 3.0.3 on 2020-07-05 09:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tweets', '0002_auto_20200704_1714'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='tweet',
            options={'ordering': ['-id'], 'verbose_name': 'Tweet', 'verbose_name_plural': 'Tweets'},
        ),
        migrations.AlterField(
            model_name='tweet',
            name='content',
            field=models.CharField(blank=True, max_length=240, null=True),
        ),
        migrations.AlterField(
            model_name='tweet',
            name='parent',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='tweets.Tweet'),
        ),
    ]
