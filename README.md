# ebird-client

[![npm](https://img.shields.io/npm/v/ebird-client.svg)](https://www.npmjs.com/package/ebird-client)
![License](https://img.shields.io/npm/l/ebird-client.svg)
[![Travis](https://img.shields.io/travis/com/dannyfritz/ebird-client.svg)](https://travis-ci.com/dannyfritz/ebird-client/)

This is a client to interact with the [ebird 2.0 API](https://documenter.getpostman.com/view/664302/ebird-api-20/2HTbHW).

Written in TypeScript to improve usage ergonomics.

## Installation

```sh
$ npm install ebird-client
```

## Example

Example in TypeScript.

```ts
import EbirdClient, { Detail } from "ebird-client";

const ebird = new EbirdClient(process.env.API_KEY!); //Get your API_KEY from eBird

const denver = {
  latitude: 39.742043,
  longitude: -104.991531,
};
ebird.recentNearbyNotableObservations({
  lat: denver.latitude,
  lng: denver.longitude,
  maxResults: 2,
})
  .then((data) => console.log(data));
```

```json
[ { "speciesCode": "lbbgul",
    "comName": "Lesser Black-backed Gull",                    
    "sciName": "Larus fuscus",
    "locId": "L2141651",
    "locName": "Valmont Overlook (Legion Park)",              
    "obsDt": "2019-03-30 18:05",
    "howMany": 1,
    "lat": 40.016268,
    "lng": -105.1891619,
    "obsValid": false,
    "obsReviewed": false,
    "locationPrivate": false },
  { "speciesCode": "easpho",
    "comName": "Eastern Phoebe",
    "sciName": "Sayornis phoebe",                             
    "locId": "L271803",
    "locName": "Stalker Lake State Wildlife Area",            
    "obsDt": "2019-03-30 17:17",
    "howMany": 1,
    "lat": 40.0853843,
    "lng": -102.2761784,
    "obsValid": false,
    "obsReviewed": false,
    "locationPrivate": false } ]

```

## Documentation

Refer to the [ebird 2.0 API docs](https://documenter.getpostman.com/view/664302/ebird-api-20/2HTbHW) for usage.
