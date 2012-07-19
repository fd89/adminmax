from django.contrib import admin
from adminmaxtest.models import Supermodel, Multi

class SupermodelAdmin(admin.ModelAdmin):
    filter_horizontal = ('multi',)

admin.site.register(Supermodel, SupermodelAdmin)
admin.site.register(Multi, admin.ModelAdmin)