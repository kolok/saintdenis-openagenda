from oa_client import utils

url = "https://tgp.theatregerardphilipe.com/presentation-de-saison-2021-2022/"
contains = "https://tgp.theatregerardphilipe.com/spectacle/"
selection = utils.get_urls(url, contains)
print(selection)