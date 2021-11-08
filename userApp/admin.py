from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser
from django.contrib.auth.models import Group

class CustomUserAdmin(UserAdmin):

    #Overrides to built in UserAdmin
    list_display = ('email',)
    ordering = ('email',)

    fieldsets = (
        ('User Info', {'fields':('email', 'password', 'profile_picture', 'first_name', 'last_name', 'age', 'hiking_experience', 'fitness_level', 'sex')}),
    )

    add_fieldsets = (
        (None, {
        'classes':('wide',),
        'fields':('email', 'password1', 'password2', 'profile_picture',  'first_name', 'last_name', 'age', 'hiking_experience', 'fitness_level', 'sex'),
    }),
    )

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.unregister(Group)