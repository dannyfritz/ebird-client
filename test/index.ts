import dotenv from "dotenv";
dotenv.config();

import test from "ava";
import _ from "lodash";

import EbirdClient, { Detail } from "../src";

let ebirdClient: EbirdClient;
test.beforeEach((_t) => {
  ebirdClient = new EbirdClient(process.env.API_KEY!);
})

const denver = {
  latitude: 39.742043,
  longitude: -104.991531,
};

test("recentNearbyNotableObservations", async (t) => {
  const data = await ebirdClient.recentNearbyNotableObservations({
    lat: denver.latitude,
    lng: denver.longitude,
    maxResults: 2,
  });
  t.assert(_.isArray(data));
});
