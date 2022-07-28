from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer
from api import serializers
# Create your views here.


@api_view(['GET'])
def getRoutes(request):

    routes = [{
        'Endpoint': '/notes/',
        'method': 'GET',
        'body': 'none',
        'description': 'Return an array of notes'
    },
        {
        'Endpoint': '/notes/id',
        'method': 'GET',
        'body': 'none',
        'description': 'Return a single of notes'
    },
        {
        'Endpoint': '/notes/create',
        'method': 'POST',
        'body': {'body': ""},
        'description': 'Create new note'
    },
        {
        'Endpoint': '/notes/id/update',
        'method': 'PUT',
        'body': {'body': ""},
        'description': 'Edit an existing note'
    },
        {
        'Endpoint': '/notes/id/delete',
        'method': 'DELETE',
        'body': None,
        'description': 'Delete an existing note'
    },
    ]

    return Response(routes)


@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getOneNote(request, id):
    note = Note.objects.get(id=id)
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)
