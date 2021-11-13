import requests
import json
import random

# Debug mode
import logging
from urllib import parse
from http.client import HTTPConnection # py3
from decouple import config

HOST = 'https://api.openagenda.com/'
AUTH_PATH = 'v2/requestAccessToken'


class OpenAgendaClient():
    code = None
    access_token = None
    public_key = None
    agenda_uid = None


    def __init__(self):
        self.code       = config('OA_CODE')
        self.public_key = config('OA_PUBLIC_KEY')
        self.agenda_uid = config('OA_AGENDA_UID')

    def authenticate(self):
        print('AUTH')
        params = {
            'grant_type':'authorization_code',
            'code':self.code,
        }
        data = json.dumps(params)

        headers = {
            'Content-Type': 'application/json',
            'Content-Length': str(len(data)),
        }

        r =requests.post(url=f'{HOST}{AUTH_PATH}', data=json.dumps(params), headers=headers)
        if r.status_code == 200:
            self.access_token = r.json()['access_token']
        else:
            raise Exception(f'auth error {r.json()}')


    def debug_requests_on(self):
        '''Switches on logging of the requests module.'''
        HTTPConnection.debuglevel = 1

        logging.basicConfig()
        logging.getLogger().setLevel(logging.DEBUG)
        requests_log = logging.getLogger("requests.packages.urllib3")
        requests_log.setLevel(logging.DEBUG)
        requests_log.propagate = True

    def debug_requests_off(self):
        '''Switches off logging of the requests module, might be some side-effects'''
        HTTPConnection.debuglevel = 0

        root_logger = logging.getLogger()
        root_logger.setLevel(logging.WARNING)
        root_logger.handlers = []
        requests_log = logging.getLogger("requests.packages.urllib3")
        requests_log.setLevel(logging.WARNING)
        requests_log.propagate = False




    def call_oa_api(self, method='GET', objects='events', params={}, retry=False):

        # GET
        if method == 'GET':
            if 'uid' not in params:
                params = { **params, 'key' : self.public_key }
                print(f'{HOST}v2/agendas/{self.agenda_uid}/{objects}?{parse.urlencode(params)}')
                r = requests.get(f'{HOST}v2/agendas/{self.agenda_uid}/{objects}?{parse.urlencode(params)}')
                return r
            else:
                uid = params['uid']
                del params['uid']
                params = { **params, 'key' : self.public_key }
                print(f'{HOST}v2/agendas/{self.agenda_uid}/{objects}/{uid}?{parse.urlencode(params)}')
                r = requests.get(f'{HOST}v2/agendas/{self.agenda_uid}/{objects}/{uid}?{parse.urlencode(params)}')
                return r


        # POST
        if method == 'POST':
            if self.access_token is None:
                self.authenticate()

            nonce=random.randint(0,999999)
            params = {
                **params,
                'access_token': self.access_token,
                'nonce': nonce,
            }
            data = json.dumps(params)
            headers = {
                'Content-Type': 'application/json',
                'Content-Length': str(len(data)),
            }
            r =requests.post(url=f'{HOST}v2/agendas/{self.agenda_uid}/{objects}', data=json.dumps(params), headers=headers)
            if r.status_code == 403:
                if retry:
                    print('error even after get a new token')
                    raise Exception('error even after get a new token')
                else:

                    print(f'403 auth failing : {retry}')
                    self.authenticate()
                    self.call_oa_api(method=method, objects=objects, params=params, retry=True)
            return r
