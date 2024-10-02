from django.contrib import admin

from .models import AdminUser, Member, PNM

admin.site.register(AdminUser)
admin.site.register(Member)
admin.site.register(PNM)
