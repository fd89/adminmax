from django.db import models
    
class Multi(models.Model):
   author = models.ManyToManyField(Authora)
   title = models.CharField(max_length=100)

class Supermodel(models.Model):
    bigInteger = models.BigIntegerField()
    booleanField = models.BooleanField()
    charField = models.CharField(max_length=100)
    commaSeparated = models.CommaSeparatedIntegerField(max_length=50)
    dateField = models.DateField()
    dateTimeField = models.DateTimeField()
    decimalField = models.DecimalField(decimal_places=2, max_digits=5)
    emailField = models.EmailField()
    fileField = models.FileField(upload_to='uploads')
    floatField = models.FloatField()
    imageField = models.ImageField(upload_to='uploads')
    integerField = models.IntegerField()
    iPAddressField = models.IPAddressField()
    nullBooleanField = models.NullBooleanField()
    positiveInteger = models.PositiveIntegerField()
    positiveSmallIntegerField = models.PositiveSmallIntegerField()
    slugField = models.SlugField()
    smallInteger = models.SmallIntegerField()
    textField = models.TextField()
    uRLField = models.URLField()
    multi = models.ManyToManyField(Multi)

