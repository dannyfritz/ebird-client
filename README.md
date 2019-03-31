# ebird-client

This is a client to interact with the [ebird 2.0 API](https://documenter.getpostman.com/view/664302/ebird-api-20/2HTbHW).

## Installation

```sh
$ npm install ebird-client
```

## Examples

Examples in TypeScript.

```ts
import EbirdClient from "ebird-client";
import { Detail } from "ebird-client/src/constants/Detail";

const ebirdClient = new EbirdClient(process.env.API_KEY!);

const denver = {
  latitude: 39.742043,
  longitude: -104.991531,
};
ebirdClient.recentNearbyNotableObservations({
  lat: denver.latitude,
  lng: denver.longitude,
  maxResults: 2,
})
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

```json
[ { speciesCode: 'lbbgul',
    comName: 'Lesser Black-backed Gull',                    
    sciName: 'Larus fuscus',
    locId: 'L2141651',
    locName: 'Valmont Overlook (Legion Park)',              
    obsDt: '2019-03-30 18:05',
    howMany: 1,
    lat: 40.016268,
    lng: -105.1891619,
    obsValid: false,
    obsReviewed: false,
    locationPrivate: false },
  { speciesCode: 'easpho',
    comName: 'Eastern Phoebe',
    sciName: 'Sayornis phoebe',                             
    locId: 'L271803',
    locName: 'Stalker Lake State Wildlife Area',            
    obsDt: '2019-03-30 17:17',
    howMany: 1,
    lat: 40.0853843,
    lng: -102.2761784,
    obsValid: false,
    obsReviewed: false,
    locationPrivate: false } ]

```

## Documentation
