import requests
from time import sleep
from parsel import Selector

BASE_URL = (
    "https://forecast.weather.gov/MapClick.php?lat=37.7772&lon=-122.4168#.WERGYu3n77g"
)

class RequestHtmlText:
    def __init__(self, base_url) -> None:
        self.BASE_URL = base_url

    def fetch_url(self):
        self.response = None
        try:
            sleep(1)
            self.response = requests.get(self.BASE_URL, timeout=3)
        except requests.Timeout:
            print(f'{self.response.status_code} Bad timeout')
            return None
        else:
            if self.response.status_code != 200:
                return None
            return self.response.text

fetch = RequestHtmlText(BASE_URL)

print(fetch.fetch_url())