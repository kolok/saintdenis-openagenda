import json
import requests 
import datetime
from bs4 import BeautifulSoup
import re

from oa_client.client import OpenAgendaClient
from oa_client import utils


day_of_week= {
    'lundi': 0,
    'mardi': 1,
    'mercredi': 2,
    'jeudi': 3,
    'vendredi': 4,
    'samedi': 5,
    'dimanche': 6,
}

def mtom(date):
    date = date.replace('Jan.','january')
    date = date.replace('Fév.','february')
    date = date.replace('Mar.','march')
    date = date.replace('Avr.','april')
    date = date.replace('Mai.','may')
    date = date.replace('Juin.','june')
    date = date.replace('Juil.','july')
    date = date.replace('Aou.','august')
    date = date.replace('Sep.','september')
    date = date.replace('Oct.','october')
    date = date.replace('Nov.','november')
    date = date.replace('Déc.','december')
    return date

def mtoi(month):
    if month == 'janvier':
        return 1
    if month == 'février':
        return 2
    if month == 'mars':
        return 3
    if month == 'avril':
        return 4
    if month == 'mai':
        return 5
    if month == 'juin':
        return 6
    if month == 'juillet':
        return 7
    if month == 'août':
        return 8
    if month == 'septembre':
        return 9
    if month == 'octobre':
        return 10
    if month == 'novembre':
        return 11
    if month == 'décembre':
        return 12
    return None

def get_duree(text):
    matches = re.findall(r'durée .* (\d+)h(\d+)?', text, re.M)
    for match in matches:
        hour = int(match[0])
        minute = 0 if match[1] == '' else int(match[1])
        return {'hour': hour, 'minute': minute}
    return {'hour': 1, 'minute': 0}


def get_day_and_date(text):
    started = {}
    print(text)
    text = text.lower()

    # mercredi 16 février à 15h, samedi 19 février 2022 à 16h
    matches = re.findall(r'([A-Za-z]+)?\s*(\d+)\s*([A-Za-zéû]+)\s*(\d+)?\s*à\s*(\d+)h(\d+)?', text, re.M|re.I)
    for match in matches:
        hour = int(match[4])
        minute = 0 if match[5] == '' else int(match[5])
        year = None if match[3] == '' else int(match[3])
        if 'day' not in started:
            started['day'] = []
        started['day'].append({'day': int(match[1]), 'hour': hour, 'minute': minute, 'year': year, 'month': mtoi(match[2])})
    text = re.sub(r'([A-Za-z]+) (\d+) ([A-Za-zéû]+) à (\d+)h(\d+)?', '',text, re.M|re.I)

    matches = re.findall(r'du ([A-Za-z]+) au ([A-Za-z]+) à (\d+)h(\d+)?', text, re.M|re.I)
    for match in matches:
        hour = int(match[2])
        minute = 0 if match[3] == '' else int(match[3])
        firstday = day_of_week[match[0].lower()]
        lastday = day_of_week[match[1].lower()]
        while firstday <= lastday:
            if firstday not in started:
                started[firstday] = []
            if {'hour': hour, 'minute': minute} not in started[firstday]:
                started[firstday].append({'hour': hour, 'minute': minute})
            firstday += 1
    text = re.sub(r'du ([A-Za-z]+) au ([A-Za-z]+) à (\d+)h(\d+)?', '',text, re.M|re.I)

    matches = re.findall(r'([A-Za-z]+),\s*([A-Za-z]+),\s*([A-Za-z]+)\s+à\s+(\d+)h(\d+)?', text, re.M|re.I)
    for match in matches:
        hour = int(match[3])
        minute = 0 if match[4] == '' else int(match[4])
        for i in range(0,3):
            if match[i].lower() not in day_of_week:
                continue
            day = day_of_week[match[i].lower()]
            if day not in started:
                started[day] = []
            if {'hour': hour, 'minute': minute} not in started[day]:
                started[day].append({'hour': hour, 'minute': minute})
    text = re.sub(r'([A-Za-z]+),\s*([A-Za-z]+),\s*([A-Za-z]+)\s+à\s+(\d+)h(\d+)?', '',text, re.M|re.I)

    matches = re.findall(r'([A-Za-z]+),\s*([A-Za-z]+)\s+à\s+(\d+)h(\d+)?', text, re.M|re.I)
    for match in matches:
        hour = int(match[2])
        minute = 0 if match[3] == '' else int(match[3])
        for i in range(0,2):
            if match[i].lower() not in day_of_week:
                continue
            day = day_of_week[match[i].lower()]
            if day not in started:
                started[day] = []
        if {'hour': hour, 'minute': minute} not in started[day]:
            started[day].append({'hour': hour, 'minute': minute})
    text = re.sub(r'([A-Za-z]+),\s*([A-Za-z]+)\s+à\s+(\d+)h(\d+)?', '',text, re.M|re.I)

    previous_matched_day = None
    matches = re.findall(r'([A-Za-z]+)\s+à\s+(\d+)h(\d+)?', text, re.M|re.I)
    for match in matches:
        hour = int(match[1])
        minute = 0 if match[2] == '' else int(match[2])
        if match[0] == 'et':
            day = previous_matched_day
        else:
            day = day_of_week[match[0].lower()]
            previous_matched_day = day
        if day not in started:
            started[day] = []
        if {'hour': hour, 'minute': minute} not in started[day]:
            started[day].append({'hour': hour, 'minute': minute})
    text = re.sub(r'([A-Za-z]+)\s+à\s+(\d+)h(\d+)?', '',text, re.M|re.I)

    matches = re.findall(r'relâche le ([A-Za-z]+)', text, re.M|re.I)
    for match in matches:
        if match in day_of_week:
            if day_of_week[match] in started:
                started.pop(day_of_week[match])

    return started

url = 'https://tgp.theatregerardphilipe.com/spectacle/huit-heures-ne-font-pas-un-jour/'
#url = "https://tgp.theatregerardphilipe.com/spectacle/moi-et-rien/"


def create_event_from_url(url, loc_uid=None, event_titles=[]):
    r = requests.get(url)
    soup = BeautifulSoup(r.content, "html.parser")

    event = {'auteur': [], 'tags': [], 'desc': [], 'age': {}, 'lien': url}

    age=soup.find(id='age')
    if age:
        event['age'] = age.get_text()

    titre=soup.find(id="titre-spectacle")
    event['titre'] = titre.get_text()
    if event['titre'] in event_titles:
        if input(f"un événement '{event['titre']}' existe déja, souhaitez-vous créer l'événement quand même (Y/n) ?").lower() == 'n':
            return
    else:
        if input(f"Souhaitez vous créer l'événement '{event['titre']}' (Y/n) ? ").lower() == 'n':
            return

    auteurs=soup.find_all(id="auteur-spec")
    for auteur in auteurs:
        if auteur.get_text().strip() != '':
            p = auteur.find_previous_sibling()
            event['auteur'].append({'prefix':p.get_text(), 'auteur':auteur.get_text()})


    tag_list=soup.find(id="taxo")
    tags = tag_list.get_text().split(',')
    for tag in tags:
        event['tags'].append(tag.strip())

    descriptions=soup.find(id="post_content").find_all("p")
    for desc in descriptions:
        matches = re.findall(r'à partir de (\d+) an', desc.get_text(), re.M|re.I)
        if matches:
            event['age'] = {'min': matches[0]}
            continue
        event['desc'].append(desc.get_text())

    image = soup.find(class_='post-thumb-img-content')
    if image:
        img = image.find('img')
        event['image'] = img['src']

    # Normalisation des date de début et de fin
    date_debut = soup.find(id="date_debut").get_text()
    date_fin = soup.find(id="date_fin").get_text()
    if not re.search(r'(20\d+)', date_debut):
        date_debut += ' ' + re.search(r'(20\d+)', date_fin).group()
    date_debut = mtom(' '.join(date_debut.split()))
    date_fin = mtom(' '.join(date_fin.split()))
    date_debut = datetime.datetime.strptime(date_debut,"%d %B %Y")
    date_fin = datetime.datetime.strptime(date_fin,"%d %B %Y")
    print(f'-- Date de début: {date_debut}')
    print(f'-- Date de fin: {date_fin}')


    horaire = soup.find(id="horaires").find('p').get_text()

    started = get_day_and_date(horaire)
    duree = get_duree(horaire)
    print(f'-- Horaire--')
    print(f'{horaire}')
    if input(f'> La durée du spéctacle est de {duree["hour"]}h{duree["minute"]} (Y/n) ?').lower() == 'n':
        d = input(f'> Saisissez la durée estimée sous la forme hh:mm (défaut: {duree["hour"]}h{duree["minute"]}): ')
        duree_h, duree_m = map(int, d.split(':'))
        duree = {'hour':duree_h, 'minute':duree_m}

    hours = []
    if 'day' in started:
        for day in started['day']:
            year = day['year'] if day['year'] else date_debut.year
            month = day['month'] if day['month'] else date_debut.month
            date1 = datetime.datetime(year, month, day['day'], day['hour'], day['minute'])
            date2 = date1 + datetime.timedelta(hours=duree['hour'], minutes=duree['minute'])
            if not input(f'A garder ? début : {date1.strftime("%A %d %B %Y %H:%M")} , date de fin {date2.strftime("%A %d %B %Y %H:%M")} (Y/n) ?') == 'n':
                hours.append({ 'begin':date1.replace(microsecond=0).astimezone().isoformat(), 'end':date2.replace(microsecond=0).astimezone().isoformat() })
        del started['day']

    while date_debut <= date_fin:
        if date_debut.weekday() in started:
            for schedule in started[date_debut.weekday()]:
                date1 = date_debut
                date1 = date1.replace(hour=schedule['hour'], minute=schedule['minute'])
                date2 = date1 + datetime.timedelta(hours=duree['hour'], minutes=duree['minute'])
                if not input(f'A garder ? début : {date1.strftime("%A %d %B %Y %H:%M")} , date de fin {date2.strftime("%A %d %B %Y %H:%M")} (Y/n) ?') == 'n':
                    hours.append({ 'begin':date1.replace(microsecond=0).astimezone().isoformat(), 'end':date2.replace(microsecond=0).astimezone().isoformat() })
        date_debut = date_debut + datetime.timedelta(days=1)

    longDesc = ''
    shortDesc = event['desc'][0][0:197] + '...'
    for auteur in event['auteur']:
        longDesc +=  f"{auteur['prefix']} {auteur['auteur']}"+ '\n'
    longDesc += '\n' + '\n'.join(event['desc'])

    if loc_uid is None:
        loc_uid = utils.get_locations()
    params = {
        'data': {
            'state': 0,
            'featured': False,
            'title': { "fr": event['titre'] },
            'description': { "fr": shortDesc },
            'longDescription': { "fr": longDesc },
            'locationUid': loc_uid,
            'conditions': { 'fr': url},
            'keywords': { 'fr': event['tags'] },
            'timings':hours,
            'image': {
                'url': event['image'],
            },
            'age': event['age'],
        }
    }
    # print('==== params ====')
    # print(params)

    oa_client = OpenAgendaClient()
    event_created = oa_client.call_oa_api(method='POST', objects='events', params=params)

    print('==== event_created ====')
    print(event_created.json())


client = OpenAgendaClient()
loc_uid = utils.get_locations(client)



# Test
#url = 'https://tgp.theatregerardphilipe.com/spectacle/pourquoi-les-lions-sont-ils-si-tristes/'
#create_event_from_url(url, loc_uid)
#exit()

# get all spectacle URL from TGP page
url = "https://tgp.theatregerardphilipe.com/presentation-de-saison-2021-2022/"
contains = "https://tgp.theatregerardphilipe.com/spectacle/"
selection = utils.get_urls(url, contains)

# Get event already created
client = OpenAgendaClient()
event_titles = []
for i in range(0,3):
    response = utils.get_events(client, {'state':i})
    for event in response['events']:
        event_titles.append(event['title']['fr'])
        print(event['title']['fr'])

for event_url in selection:
    print(f'FOR EVENT: {event_url}')
    create_event_from_url(event_url, loc_uid, event_titles)