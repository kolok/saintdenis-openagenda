from oa_client.client import OpenAgendaClient

cl = OpenAgendaClient()
#cl.debug_requests_on()

events_response = cl.call_oa_api()

print(events_response.json())