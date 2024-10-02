from django.contrib.auth.decorators import login_required
from django.http import JsonResponse

@login_required
def get_user_permissions(request):
    permissions = [perm.codename for perm in request.user.user_permissions.all()]
    return JsonResponse({"permissions": permissions})