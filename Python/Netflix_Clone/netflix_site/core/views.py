from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.
def index(request):
    return render(request, 'index.html')

@csrf_exempt
def add_to_list(request):
    if request.method == 'POST':
        movie_id = request.POST.get('movie_id')

        # TODO: Add logic to save the movie to the user's list
        # For now, we'll just return a dummy success message

        return JsonResponse({'message': 'Added!'})

    return JsonResponse({'message': 'Invalid request'}, status=400)