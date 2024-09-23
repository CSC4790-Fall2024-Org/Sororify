from rest_framework import serializers 
from . models import *

class PNMSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = PNM 
        fields = ['firstname', 'lastname', 'state', 'county', 'hometown', 'major', 'involvement', 'activities']

class MemberSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Member 
        fields = ['firstname', 'lastname', 'state', 'county', 'hometown', 'major', 'involvement', 'activities']


