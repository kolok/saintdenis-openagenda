import requests
from bs4 import BeautifulSoup

def get_urls(url, contains):

    r = requests.get(url)
    soup = BeautifulSoup(r.content, 'html.parser')
    spectacles = []
    for link in soup.find_all('a'):
        href = link.get('href')
        if href is not None:
            if contains in href:
                spectacles.append(href)
    return list(set(spectacles))


def get_locations(oa_client):
    locations = oa_client.call_oa_api(method='GET', objects='locations')
    locs = locations.json()
    index=1
    # if len(locs['locations']) == 1:
    #     return locs['locations'][0]['uid']
    for loc in locs['locations']:
        print(f"{index}: {loc['name']}, adresse: {loc['address']}")
        index == 1
    number = input('choose a location : ')
    try:
        return locs['locations'][int(number)-1]['uid']
    except:
        print(f"Erreur : l'option doit-être un chiffre de 1 à {len(locs['locations'])}")
        return get_locations()

def get_events(oa_client, params={}):
    events = oa_client.call_oa_api(method='GET', objects='events' ,params=params)
    return events.json()
