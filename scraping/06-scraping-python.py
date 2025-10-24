import requests
from bs4 import BeautifulSoup

#Se hace la petición GET
page = requests.get('https://seohacks.es/')

if page.status_code == 200:
  #Parsear el contenido mediante BeautifulSoup
  soup = BeautifulSoup(page.text, "html.parser")
  print(soup.title)