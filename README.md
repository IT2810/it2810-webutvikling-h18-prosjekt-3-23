# it2810-webutvikling-h18-prosjekt-3-23

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

For å løse oppgaven om å lage en “Personal Information and Motivation Manager” har vi valgt å implementere en prototype av appen som holder på avtaler og gjøremål. For motivasjonens del har vi lagt inn at brukeren får en poengscore ut i fra hvor mange gjøremål den fullfører, og antall planlagte avtaler. Brukeren har mulighet til å navigere mellom tre sider: en Home-side, en Appointment-side og en Todo-side. På Home-siden ligger poengscoren brukeren har oppnådd. Appointment-siden inneholder alle avtaler med tittel, adresse og tid,  muligheten til å legge til og slette avtaler, samt en mulighet til å åpne et kart som viser hvor brukeren er, og hvor avtalens adresse er. Her brukes altså telefonens gps. Todo-siden har muligheten til å legge til gjøremål i en liste, samt til å huke av at et gjøremål er gjort, noe som gjør at det forsvinner. 

<img width="200" alt="home" src="https://user-images.githubusercontent.com/22234642/47218731-116d9f80-d3ad-11e8-9179-24f583545960.jpg">  <img width="200" alt="appoint" src="https://user-images.githubusercontent.com/22234642/47218729-116d9f80-d3ad-11e8-9236-be8913704909.jpg">  <img width="200" alt="todo" src="https://user-images.githubusercontent.com/22234642/47218730-116d9f80-d3ad-11e8-9b1a-9b1bb2828cb5.jpg">

<a name="v&r"></a>
## Verktøy og rammeverk
* [Node.js](https://nodejs.org/en/)
* [React Native](https://facebook.github.io/react-native/)
* [Expo](https://expo.io/)
* [Jest](https://jestjs.io/)

<a name="inst"></a>
## Installering
1. Installer Node.js [her](https://nodejs.org/en/)
2. Installer expo [her](https://expo.io/)
3. Naviger inn i pro3 i terminalen og skriv "npm start" for å kjøre prosjektet lokalt.


<a name="innhold"></a>
## Krav til innhold og funksjonalitet

Krav til innhold og funksjonalitet
I appen kan man legge til avtaler og todos. Vi har lagt inn en automatisk oppdatering av poengscore når brukeren oppretter nye avtaler og fullfører todos for å øke motivasjonen til brukeren. Ettersom at dette bare er en prototype, har vi valgt å avgrense appen til det som er nevnt. I en ferdig app ville vi lagt til “trofeer” for høy poengscore, eller en “highscore”-liste som kommuniserer med andre brukere, for å gjøre det enda mer motiverende. Vi ville også hatt med muligheten til å se en oversikt over ferdige todo’s og tidligere avtaler. I prototypen forsvinner todo’s-ene når de blir fullført og avtalene når man når datoen for avtalen. 

Alle todo’s, poengscore og avtaler lagres med all informasjon i AsyncStorage, slik at data tas vare på selv om appen avsluttes og startes på nytt. Dersom Expo har fått tillatelse til å bruke enhetens lokasjon blir også dette lagret i AsyncStorage, slik at man ikke trenger å godkjenne dette hver gang.  
Vi har brukt GPS som eksempel på noe som er utover basic React Native UI-problematikk. GPS-en brukes ved at brukerens lokasjon vises på kartet, i tillegg er avtalens adresse markert på kartet. Igjen, ettersom at dette er en prototype, avgrenset vi appens funksjonalitet, men i en ferdig app, ville vi hatt med veibeskrivelse mellom brukerens lokasjon og avtalens adresse. 

<a name="teknologi"></a>
## Krav til bruk av teknologi 

<b>Git og issues</b>


<a name="testing"></a>
## Testing

<a name="losninger"></a>
## Valg og løsninger

<b>Homepage og poengscore</b>

<b>Todo</b>

<b>BottomNavigation</b>

<b>Appointment</b>

<b>Geolocation</b>

<a name="tuto"></a>
## Tutorial (bruk av GPS)

<b>Spørre om tillatelse til å finne lokasjon</b>

<b>Finne lokasjonen til adressen til en avtale</b>

<b>Finne lokasjonen til enheten</b>

<b>Komponentene</b>

<a name="kilder"></a>
## Kilder
* Form: https://github.com/gcanti/tcomb-form-native 
* React Native Elements: https://react-native-training.github.io/react-native-elements/
* Todo: https://gist.github.com/ahmedam55/b10adc17c4eed1bb634cf6d934552b52/ 
* BottomNavigation: https://reactnavigation.org/docs/en/material-bottom-tab-navigator.html
* Location: https://docs.expo.io/versions/latest/sdk/location
* MapView: https://docs.expo.io/versions/latest/sdk/map-view
* Permission: https://docs.expo.io/versions/latest/sdk/permissions.html
* react-native-maps: https://github.com/react-community/react-native-maps






