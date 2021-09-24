from oa_client.client import OpenAgendaClient

cl = OpenAgendaClient()

p = {
  'data': {
      'state': 0,
      'featured': False,
      'title': 'Mon événement 2!!!',
      'description': 'il est cool mon événement',
      'locationUid': 66753194,
      'timings':[
        {
            "begin": "2022-02-25T17:00:00+0200",
            "end": "2022-02-25T19:00:00+0200"
        },
      ],
      'image': {
          'url': 'https://tgp.theatregerardphilipe.com/wp-content/uploads/web.jpg',
      }
  }
}

event_created = cl.call_oa_api(method='POST', objects='events', params=p)

print(event_created.json())
