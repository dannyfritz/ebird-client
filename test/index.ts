import dotenv from "dotenv";
dotenv.config();

import EbirdClient from "../src";
import { Detail } from "../src/constants/Detail";

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
