import requests 
import datetime
from bs4 import BeautifulSoup

url = 'https://tgp.theatregerardphilipe.com/spectacle/huit-heures-ne-font-pas-un-jour/'
#url = "https://tgp.theatregerardphilipe.com/spectacle/moi-et-rien/"

r = requests.get(url)
soup = BeautifulSoup(r.content, "html.parser")

event = {'auteur': [], 'tags': [], 'desc': [], 'lien': url}

age=soup.find(id='age')
if age:
    event['age'] = age.get_text()

titre=soup.find(id="titre-spectacle")
event['titre'] = titre.get_text()

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
    event['desc'].append(desc.get_text())

image = soup.find(class_='post-thumb-img-content')
img = image.find('img')
event['image'] = img['src']

date_debut = soup.find(id="date_debut").get_text()
date_fin = soup.find(id="date_fin").get_text()
horaire = soup.find(id="horaires").find('p').get_text()

print(f'-- Date de début: {date_debut}')
print(f'-- Date de fin: {date_fin}')
print(f'-- Horaire: {horaire}')
print(f'{horaire}')
duree = input('> Saisissez la durée estimée sous la forme hh:mm : ')
debut = input("> Saisissez l'heure de début sous la forme dd/mm/yyyy hh:mm : ")

duree_h, duree_m = map(int, duree.split(':'))
duree_delta = datetime.timedelta(hours=duree_h, minutes=duree_m)
datetime_debut = datetime.datetime.strptime(debut,"%d/%m/%Y %H:%M")
datetime_fin  = datetime_debut + duree_delta
print(f"début : {datetime_debut}, fin {datetime_fin}")

ajout = input('voulez vous ajouter un horaire (y/N) ? ')
while ajout.lower() == 'y':
    debut = input('saisissez une heure de début sous la forme dd/mm/yyyy hh:mm : ')
    ajout = input('voulez vous ajouter un horaire (y/N) ? ')

print(event)
