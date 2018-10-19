# it2810-webutvikling-h18-prosjekt-3-23
Dette er en online utstilling med brukerstyrte kombinasjoner av av lyd, bilde og tekst. 

## Innholdsfortegnelse
* [Beskrivelse av applikasjonen](#ba)
* [Verktøy og rammeverk](#v&r)
* [Installasjon](#inst)
* [Krav til innhold og funksjonalitet](#innhold)
* [Krav til bruk av teknologi](#teknologi)
* [Testing](#testing)
* [Valg og løsninger](#losninger)
* [Tutorial](#tuto)
* [Kilder](#kilder)

<a name="ba"></a>
## Beskrivelse av applikasjon

<a name="v&r"></a>
## Verktøy og rammeverk
* [Node.js](https://nodejs.org/en/) - "Open source server environment"
* [React](https://reactjs.org/) - JavaScript bibliotek
* [Axios](https://www.npmjs.com/package/axios) - AJAX bibliotek

<a name="inst"></a>
## Installering
1. Last ned Node.js [her](https://nodejs.org/en/)
2. Last ned axios [her](https://www.npmjs.com/package/axios)
3. Naviger inn i pro2 i terminalen og skriv "npm start" for å kjøre prosjektet lokalt.


<a name="innhold"></a>
## Krav til innhold og funksjonalitet

<a name="teknologi"></a>
## Krav til bruk av teknologi 

<b>Git og issues</b>


<a name="testing"></a>
## Testing

<a name="losninger"></a>
## Valg og løsninger

<b>Homepage og poengscore</b>

På Homepage vises det to poengscores, som hentes ut fra AsyncStorage hver gang man går inn på forsiden av appen. Den ene er hvor mange todo’s som er gjennomført, mens den andre er antall planlagte avtaler. På Homepage kan man også resette poengscoren for todo’s, om man skulle ønske dette. 

TodoPage og Appointments henter ut poengscoren fra AsyncStorage, øker scoren med 1 for hver gjennomførte todo og hver avtale lagt til, og sender scoren tilbake til AsyncStorage vha. ScoreManager. Appointment-siden senker også scoren med 1 for hver avtale som slettes, slik at disse ikke regnes med i poengscoren for planlagte avtaler. 

<b>Todo</b>

Todo-delen av applikasjonen er delt i tre komponenter: TodoPage, TodoList og TodoInput, samt en fil i utils-mappa, TaskManager. 

All logikken for todo-lista ligger i TodoPage, og sendes ned som props til TodoList og TodoInput. De to sistnevnte inneholder kun render-funksjonen. Dette ble gjort for å separere de React Native-spesifikke komponentene (her: View og Text) mest mulig i egne filer, slik at logikken kunne blitt brukt i en vanlig web-applikasjon med React ved en senere anledning. TodoPage inneholder logikken som trengs for å legge til og fullføre gjøremål, samt øke poengscoren ved fullførte gjøremål. TaskManager håndterer Todo-funksjonalitetens kommunikasjon med AsyncStorage.

All stylingen for todo-lista ligger også i TodoPage, og sendes ned til TodoInput og TodoList ved hjelp av props. 


<b>BottomNavigation</b>

Navigasjonsbaren nederst på siden blir brukt til å navigere mellom våre tre hovedsider; Homepage, Appointments og Todo’s. For å lage navigasjonsbaren brukte vi en del av React Navigation, "createMaterialBottomNavigator". Dette lot oss style navigasjonsbaren slik vi ønsket, med farger og Iconer.

<b>Appointment</b>

Appointment-siden inneholder komponenten Card fra React Native Elements som viser alle fremtidige avtaler. Informasjonen i hvert Card lagres som separate objekter i en liste i AsyncStorage. 

For å legge til en ny avtale navigerer man til NewAppointment-siden ved å trykke på ‘add’-knappen i høyre hjørne. På NewAppointment-siden fyller brukeren inn tittel, adresse og tidspunkt for avtalene. Dette inputskjemaet er laget med “tcomb-form-native”, som gjør slike skjemaer veldig enkle og greie. Informasjonen blir så hentet ut og sendt videre til Appointment-siden. Deretter lagres informasjonen i AsyncStorage og det opprettes et nytt Card. 

All navigering mellom disse sidene og kartet, som det står mer om nedenfor, skjer ved hjelp av React Navigation sin createStackNavigator funksjon. 

<b>Geolocation</b>

Kartdelen av applikasjonen vår blir brukt på appointments-siden. Ved å trykke på “VIEW MAP” på et avtalekort får man opp et kart som viser enhetens lokasjon og følger den dersom enheten beveger seg. Man får også opp en markør som markerer adressen til stedet der avtalen skal holdes. 

Har man skrevet inn noe annet enn en adresse i adresse-feltet vil man få et par warnings når man trykker seg inn på kartet. Dette er vi klar over, men det ble ikke prioritert å håndtere dette i denne prototypen, ettersom vi antar at brukeren vil skrive inn en ordentlig adresse. 

Vi har også lagt inn logikk som spør om tillatelse til å bruke enhetens lokasjon og logikk som sjekker om applikasjonen er åpnet på en android emulator (det å finne lokasjon fungerer ikke på android emulator, bare på faktiske android-enheter). Åpner man kartet i en android emulator vil man få opp en feilmelding, i en ios simulator vil enhetens lokasjon være i San Francisco og på sin egen mobil vil enhetens lokasjon være der enheten faktisk befinner seg. 

<a name="tuto"></a>
## Tutorial (bruk av GPS)

<b>Spørre om tillatelse til å finne lokasjon</b>

<b>Finne lokasjonen til adressen til en avtale</b>

<b>Finne lokasjonen til enheten</b>

<b>Komponentene</b>

<a name="kilder"></a>
## Kilder
