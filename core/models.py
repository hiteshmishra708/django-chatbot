from django.db import models
from django.contrib.auth.models import User
from django.http import JsonResponse

class Response():
    """
    Handle API Responses
    """
    def __init__(self, data, status_code=200, message=None):
        self.data = data
        self.status_code = status_code

    def get_obj(self):
        return JsonResponse({
            'status_code': self.status_code,
            'data': self.data,
        })