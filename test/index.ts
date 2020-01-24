import dotenv from "dotenv";
dotenv.config();

import test from "ava";
import _ from "lodash";

import EbirdClient, { Format, RegionType } from "../src";
import { IObservationFull } from "../src/api/IObservation";

let ebirdClient: EbirdClient;
test.beforeEach((_t) => {
  ebirdClient = new EbirdClient(process.env.API_KEY!);
});

const DENVER = {
  latitude: 39.742043,
  longitude: -104.991531,
};

test("adjacentRegions", async (t) => {
  const data = await ebirdClient.adjacentRegions({
    regionCode: "US-CO",
  });
  t.assert(_.isArray(data));
});

test("checklistFeedOnADate", async (t) => {
  const data = await ebirdClient.checklistFeedOnADate({
    d: 27,
    m: 3,
    regionCode: "US-CO",
    y: 2019,
  });
  t.assert(_.isArray(data));
});

test("historicObservationsOnADate", async (t) => {
  const data = await ebirdClient.historicObservationsOnADate({
    d: 27,
    m: 3,
    regionCode: "US-CO",
    y: 2019,
  });
  t.assert(_.isArray(data));
});

test("hotspotsInARegion", async (t) => {
  const data = await ebirdClient.hotspotsInARegion({
    fmt: Format.JSON,
    regionCode: "US-CO",
  });
  t.assert(_.isArray(data));
});

test("hotspotInfo", async (t) => {
  const data = await ebirdClient.hotspotInfo({
    locId: "L99381",
  });
  t.assert(_.isObject(data));
});

test("nearbyHotspots", async (t) => {
  const data = await ebirdClient.nearbyHotspots({
    fmt: Format.JSON,
    lat: DENVER.latitude,
    lng: DENVER.longitude,
  });
  t.assert(_.isArray(data));
});

test("nearestObservationsOfASpecies", async (t) => {
  const data = await ebirdClient.nearestObservationsOfASpecies({
    lat: DENVER.latitude,
    lng: DENVER.longitude,
    speciesCode: "veery",
  });
  t.assert(_.isArray(data));
});

test("recentChecklistsFeed", async (t) => {
  const data = await ebirdClient.recentChecklistsFeed({
    regionCode: "US-CO",
  });
  t.assert(_.isArray(data));
});

test("recentNearbyNotableObservations", async (t) => {
  const data = await ebirdClient.recentNearbyNotableObservations({
    lat: DENVER.latitude,
    lng: DENVER.longitude,
  });
  t.assert(_.isArray(data));
});

test("recentNearbyObservations", async (t) => {
  const data = await ebirdClient.recentNearbyObservations({
    lat: DENVER.latitude,
    lng: DENVER.longitude,
  });
  t.assert(_.isArray(data));
});

test("recentNearbyObservationsOfASpecies", async (t) => {
  const data = await ebirdClient.recentNearbyObservationsOfASpecies({
    lat: DENVER.latitude,
    lng: DENVER.longitude,
    speciesCode: "veery",
  });
  t.assert(_.isArray(data));
});

test("recentNotableObservationsInARegion", async (t) => {
  const data = await ebirdClient.recentNotableObservationsInARegion({
    detail: "full",
    regionCode: "US-CO",
  }) as IObservationFull[];
  t.assert(_.isArray(data));
  t.assert(_.isString(data[0].checklistId));
});

test("recentObservationsInARegion", async (t) => {
  const data = await ebirdClient.recentObservationsInARegion({
    regionCode: "US-CO",
  });
  t.assert(_.isArray(data));
});

test("recentObservationsOfASpeciesInARegion", async (t) => {
  const data = await ebirdClient.recentObservationsOfASpeciesInARegion({
    regionCode: "US-CO",
    speciesCode: "veery",
  });
  t.assert(_.isArray(data));
});

test("regionalStatisticsOnADate", async (t) => {
  const data = await ebirdClient.regionalStatisticsOnADate({
    d: 27,
    m: 3,
    regionCode: "US-CO",
    y: 2019,
  });
  t.assert(_.isObject(data));
  t.assert(_.isNumber(data.numChecklists));
  t.assert(_.isNumber(data.numContributors));
  t.assert(_.isNumber(data.numSpecies));
});

test("regionInfo", async (t) => {
  const data = await ebirdClient.regionInfo({
    regionCode: "US-CO",
  });
  t.assert(_.isObject(data));
  t.assert(_.isString(data.result));
});

test("subRegionList", async (t) => {
  const data = await ebirdClient.subRegionList({
    fmt: Format.JSON,
    parentRegionCode: "world",
    regionType: RegionType.COUNTRY,
  });
  t.assert(_.isArray(data));
});

test("taxonomicForms", async (t) => {
  const data = await ebirdClient.taxonomicForms({
    speciesCode: "veery",
  });
  t.assert(_.isArray(data));
});

test("taxonomicGroups", async (t) => {
  const data = await ebirdClient.taxonomicGroups({
    speciesGrouping: "merlin",
  });
  t.assert(_.isArray(data));
});

test("taxonomy", async (t) => {
  const data = await ebirdClient.taxonomy({
    fmt: Format.JSON,
    species: ["veery"],
  });
  t.assert(_.isArray(data));
});

test("taxonomyVersions", async (t) => {
  const data = await ebirdClient.taxonomyVersions({});
  t.assert(_.isArray(data));
});

test("top100", async (t) => {
  const data = await ebirdClient.top100({
    d: 27,
    m: 3,
    regionCode: "US-CO",
    y: 2019,
  });
  t.assert(_.isArray(data));
});

test("viewChecklist", async (t) => {
  const data = await ebirdClient.viewChecklist({
    subId: "S29893687",
  });
  t.assert(_.isObject(data));
  t.assert(_.isString(data.projId));
  t.assert(_.isNumber(data.durationHrs));
});
