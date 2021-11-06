from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser
from django.contrib.auth.models import Group

class CustomUserAdmin(UserAdmin):

    #Overrides to built in UserAdmin
    list_display = ('email',)
    ordering = ('email',)

    fieldsets = (
        ('User Info', {'fields':('email', 'password')}),
    )

    add_fieldsets = (
        (None, {
        'classes':('wide',),
        'fields':('email', 'password1', 'password2'),
    }),
    )

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.unregister(Group)