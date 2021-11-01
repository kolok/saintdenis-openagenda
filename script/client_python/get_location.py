from oa_client.client import OpenAgendaClient
from oa_client import utils

client = OpenAgendaClient()
loc_uid = utils.get_locations(client)
print(loc_uid)
