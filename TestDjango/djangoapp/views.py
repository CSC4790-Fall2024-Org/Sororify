from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User, Group
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

@csrf_exempt
def register(request):
    if request.method == 'POST':
        first_name = request.POST.get('firstName')
        last_name = request.POST.get('lastName')
        email = request.POST.get('email')
        user_type = request.POST.get('userType')

        user = User.objects.create_user(username=first_name + last_name, email=email)
        group = Group.objects.get(name=user_type)
        user.groups.add(group)

        return JsonResponse({'message': 'User created successfully'}, status=201)

@login_required
def get_user_permissions(request):
    permissions = [perm.codename for perm in request.user.user_permissions.all()]
    return JsonResponse({"permissions": permissions})