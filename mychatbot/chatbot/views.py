from django.shortcuts import render

import os
import json
from django.http import JsonResponse
import google.generativeai as genai
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Initialize the Gen AI client using the API key from environment variables
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# Access the desired model
model = genai.GenerativeModel("gemini-2.0-flash")
    
@api_view(['POST'])
def chat_view(request):
    user_message = request.data.get('message', '')
    try:
        response = model.generate_content(user_message)
        return Response({'response': response.text})
    except Exception as e:
        # Log the error for debugging
        print("GenAI error:", e)
        return Response({'error': 'Failed to generate response.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)