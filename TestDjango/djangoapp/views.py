from django.shortcuts import redirect
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from pymongo import MongoClient
import json
from django.contrib.auth.hashers import make_password
import logging
from django.http import HttpResponse
from django.contrib.auth.hashers import check_password
from .models import User, Profile

#logging.basicConfig(level=logging.INFO)

def home(request):
    return HttpResponse("Welcome to the Home Page")

# Connect to MongoDB
try:
    client = MongoClient('mongodb+srv://sororify-admin:Sororify1!@mycluster.o1kdr.mongodb.net/')
    db = client['SororifySurvey']
    users_collection = db['SHAYUSERS']
    logging.info("Connected to MongoDB successfully")
except Exception as e:
    logging.error(f"Error connecting to MongoDB: {e}")

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data['username']
            email = data['email']
            password = make_password(data['password'])  # Hash the password
            role = data.get('role')
            chapter = data.get('chapter')

            # Check if the user already exists
            if users_collection.find_one({'email': email}):
                return JsonResponse({'success': False, 'error': 'User already exists'})

            # Store user data in MongoDB
            result = users_collection.insert_one({
                'username': username,
                'email': email,
                'password': password,
                'role': role,
                'chapter': chapter
            })
            logging.info(f'User {username} inserted with id {result.inserted_id}')

            # Store user data in Django
            user = User.objects.create(
                username=username,
                email=email,
                password=password
            )
            Profile.objects.create(user=user, role=role, chapter=chapter)

            return JsonResponse({'success': True})
        except Exception as e:
            logging.error(f'Error inserting user: {e}')
            return JsonResponse({'success': False, 'error': 'Error inserting user into MongoDB'})
    return JsonResponse({'success': False, 'error': 'Invalid request method'})

@csrf_exempt
def signin(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        print(f'Received sign-in request: email={email}, password={password}')  # Debugging statement

        if not email or not password:
            print('Email and password are required')  # Debugging statement
            return JsonResponse({'error': 'Email and password are required'}, status=400)

        # Check if user exists
        user = users_collection.find_one({'email': email})
        role = user.get('role') if user else None
        if not user:
            print('User not found')  # Debugging statement
            return JsonResponse({'error': 'Invalid email or password'}, status=400)

        # Verify password
        if not check_password(password, user['password']):
            print('Password does not match')  # Debugging statement
            return JsonResponse({'error': 'Invalid email or password'}, status=400)

        print('Sign in successful')  # Debugging statement
        return JsonResponse({'success': True, 'message': 'Sign in successful', 'role': role})


    print('Invalid request method')  # Debugging statement
    return JsonResponse({'error': 'Invalid request method'}, status=405)