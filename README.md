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

<b>Todo</b>

<b>BottomNavigation</b>

<b>Appointment</b>

<b>Geolocation</b>

<a name="tuto"></a>
## Tutorial (bruk av GPS)
Her kommer en tutorial for Geolocation og hvordan vi brukte Gps.

Vi brukte Expo’s API for kartet og lokasjon, det var bare komponenten “Marker” som ble importert fra et annet API. Expo SDK API gir tilgang til forskjellig systemfunksjonalitet som vi lett kunne importere og bruke i javascript-filene. I Geolocation.js brukte vi: **import { Constants, Location, Permissions, MapView } from 'expo';**.

<b>Spørre om tillatelse til å finne lokasjon</b>

For å finne lokasjonen til enheten må man først spørre om tillatelse til å finne den, siden det er sensitiv informasjon som ikke alle ønsker å dele med alle. For å gjøre dette importerte vi **Permissions** fra Expo. 
* Metode: *Expo.Permissions.askAsync(...permissionTypes)*. Denne metoden tar  inn de typene tillatelser man ønsker. Den returnerer et promise med informasjon om tillatelsene, om de er innvilget eller ikke. Metoden finner ut om appen allerede har fått tilgang til de oppgitte tillatelsene eller om den må spørre om det.

  <img width="500" alt="skjermbilde 2018-09-18 kl 13 44 50" src="https://user-images.githubusercontent.com/22234642/47218732-116d9f80-d3ad-11e8-892b-e77e9a4240db.png">


<b>Finne lokasjonen til adressen til en avtale</b>

For å finne lokasjonen til adressen til en avtale importerte vi **Location** fra Expo. 
* Metode: * *Expo.Location.geocodeAsync(address)*. Denne metoden tar inn en adresse i string. Den returnerer et geokodet objekt med feltene "latitude", "longitude", "altitude" og "accuracy". Da kunne vi bruke latitude og longitude i markeren, for å markere på kartet hvor avtalen skulle holdes.

  <img width="500" alt="skjermbilde 2018-09-18 kl 13 44 50" src="https://user-images.githubusercontent.com/22234642/47218733-116d9f80-d3ad-11e8-9b83-72d0cf882965.png">

<b>Finne lokasjonen til enheten</b>

For å vise og følge enhetens/brukerens lokasjon brukte vi *"showsUserLocation={true}"* og *"followUserLocation={true}"* inne i MapView-komponenten. Vi satt også "provider" til Google, da vi ønsker å ha google maps på alle enheter uavhengig om det er ios eller android.

<b>Komponentene</b>

* **MapView:** For å vise kartet brukte vi komponenten MapView. Dette er en komponent som bruker Apple Maps eller Google Maps på iOS og Google Maps på Android. I en Expo-app kreves det ingen oppsett for å kunne bruke denne komponenten, man må bare huske å importere den i toppen av javascript-filen: **import {MapView} from ‘Expo’;**

* **Marker:** For å kunne markere adressen til avtalen brukte vi komponenten Marker fra react-native-maps. I denne komponenten la vi inn attributtet coordinate og tok inn latitude og longitude til adressen til avtalen. 
  - For å installere react-native-maps: **npm install react-native-maps**
  - Importere i javascript-filen: **import {Marker} from ‘react-native-maps’;**
         
  <img width="500" alt="skjermbilde 2018-09-18 kl 13 44 50" src="https://user-images.githubusercontent.com/22234642/47218736-129ecc80-d3ad-11e8-91a9-466472d3909c.png">
  

<a name="kilder"></a>
## Kilder
