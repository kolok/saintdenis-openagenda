from oa_client.client import OpenAgendaClient
from oa_client import utils

client = OpenAgendaClient()
for i in range(0,3):
    response = utils.get_events(client, {'state':i})
    event_titles = []
    for event in response['events']:
        event_titles.append(event['title']['fr'])
        print(event['title']['fr'])
