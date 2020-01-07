from bs4 import BeautifulSoup as bsoup
from urllib.request import urlopen as ureq
import re


pickup_day = input('Day of collection: ')
ret_day = input('Day of return: ')
pickup_month = input('Month of collection: ')
ret_month = input('Month of return: ')

c_url = 'https://www.rentalcars.com/SearchResults.do?country=United+Kingdom&doYear=2020&doFiltering=false&exSuppliers=&fromLocChoose=true&filterTo=1000&dropLocationName=&ftsType=A&ftsLocationSearch=36031&dropFtsSearch=L&doDay={0}&searchType=&filterFrom=0&puMonth={1}&dropFtsInput=brist&dropCountry=United+Kingdom&puDay={2}&dropFtsLocationSearch=36031&puHour=10&dropFtsEntry=1472163&enabler=&b_spl=Alamo%3AAvis%3ABudget%3ADollar%3AEnterprise%3AEuropcar%3AFirefly%3AHertz%3AKeddy+By+Europcar%3ASixt&distance=10&ftsEntry=1472163&city=Bristol&ordering=recommended&driverage=on&filterName=CarCategorisationSupplierFilter&dropCity=Bristol&dropFtsType=A&ftsAutocomplete=Bristol+Airport+%28BRS%29%2C+Bristol%2C+United+Kingdom&driversAge=30&dropFtsAutocomplete=Bristol+Airport+%28BRS%29%2C+Bristol%2C+United+Kingdom&dropFtsLocationName=Bristol+Airport&dropCountryCode=gb&countryCode=gb&doMinute=00&advSearch=&filterAdditionalInfo=&puYear=2020&locationName=Bristol+Airport&puMinute=00&ftsInput=brist&coordinates=51.3835%2C-2.71367&dropLocation=36031&doHour=10&dropCoordinates=51.3835%2C-2.71367&ftsLocationName=Bristol+Airport&ftsSearch=L&location=36031&doMonth={3}'.format(ret_day, ret_month, pickup_day, pickup_month)

reqres = ureq(c_url)
html_page = reqres.read()
reqres.close()

# Html parsing
ready_page = bsoup(html_page, 'html.parser')
container = ready_page.findAll('script', {'type':'text/javascript'})

# Preparing files
with open('Rateshop.txt', 'w') as write:
    for wr in container:
        print(wr, file=write)

with open('Rateshop.txt', 'r') as rshop:
    line = rshop.read().replace('\n', '')

# Extracting relevant data
con = re.findall(r"'price' : .{6}", line)
cont = re.findall(r"'brand' : .{6}", line)

c = []
d = []
for x in con:
    c.append(x[-5:])
for y in cont:
    d.append(y[-5:])

# Joining lists of relevant data
company_list = [list(e) for e in zip(d, c)]
joined_complist =[]


def my_func(par):
    for x in company_list:
        if par in x:
            joined_complist.append(x[-1])

    a = 0
    n = 0
    try:
        for x in joined_complist:
            b = float(x)
            n += 1
            a += b
    except ValueError:
        pass
    rental_days = float(ret_day) - float(pickup_day)
    rental_days = int(rental_days)
    try:
        price = int(a/n)
        print(par, 'is £', price, 'for ', rental_days, 'days.')
    except ZeroDivisionError:
        pass


my_func('Keddy')
my_func('Avis')
my_func('Budge')
my_func('Sixth')
my_func('Europ')
my_func('Hertz')
my_func('Alamo')
my_func('Enter')
my_func('Firef')
