import axios, { AxiosInstance } from "axios";
import _ from "lodash";
import { IHistoricObservationsOnADateRequest, IHistoricObservationsOnADateResponse } from "./api/IHistoricObservationsOnADate";
import { INearestOBservationOfASpeciesResponse, INearestObservationsOfASpeciesRequest } from "./api/INearestObservationsOfASpecies";
import { IRecentNearbyNotableObservationsRequest, IRecentNearbyNotableObservationsResponse } from "./api/IRecentNearbyNotableObservations";
import { IRecentNearbyObservationsRequest, IRecentNearbyObservationsResponse } from "./api/IRecentNearbyObservations";
import { IRecentNearbyObservationsOfASpeciesRequest, IRecentNearbyObservationsOfASpeciesResponse } from "./api/IRecentNearbyObservationsOfASpecies";
import { IRecentNotableObservationsInARegionRequest, IRecentNotableObservationsInARegionResponse } from "./api/IRecentNotableObservationsInARegion";
import { IRecentObservationsInARegionRequest, IRecentObservationsInARegionResponse } from "./api/IRecentObservationsInARegion";
import { IRecentObservationsOfASpeciesInARegionRequest, IRecentObservationsOfASpeciesInARegionResponse } from "./api/IRecentObservationsOfASpeciesInARegion";
import { ITaxonomyRequest, ITaxonomyResponse } from "./api/ITaxonomy";

export default class EbirdClient {
  private ebirdHttp: AxiosInstance;

  constructor(ebirdApiKey: string) {
    this.ebirdHttp = axios.create({
      baseURL: "https://ebird.org/ws2.0",
      headers: { "x-ebirdapitoken": ebirdApiKey },
    });
  }

  public async historicObservationsOnADate(request: IHistoricObservationsOnADateRequest): Promise<void | IHistoricObservationsOnADateResponse> {
    return this.get(`/data/obs/${request.regionCode}/historic/${request.y}/${request.m}/${request.d}`, ["back", "cat", "maxResults", "includeProvisional", "hotspot", "r"], request);
  }

  public async nearestObservationsOfASpecies(request: INearestObservationsOfASpeciesRequest): Promise<void | INearestOBservationOfASpeciesResponse> {
    return this.get(`/data/nearest/geo/recent/${request.speciesCode}`, ["back", "cat", "maxResults", "includeProvisional", "hotspot", "r"], request);
  }

  public async recentObservationsInARegion(request: IRecentObservationsInARegionRequest): Promise<void | IRecentObservationsInARegionResponse> {
    return this.get(`/data/obs/${request.regionCode}/recent`, ["back", "cat", "maxResults", "includeProvisional", "hotspot", "r"], request);
  }

  public async recentObservationsOfASpeciesInARegion(request: IRecentObservationsOfASpeciesInARegionRequest): Promise<void | IRecentObservationsOfASpeciesInARegionResponse> {
    return this.get(`/data/obs/${request.regionCode}/recent/${request.speciesCode}`, ["back", "cat", "maxResults", "includeProvisional", "hotspot", "r"], request);
  }

  public async recentNearbyNotableObservations(request: IRecentNearbyNotableObservationsRequest): Promise<void | IRecentNearbyNotableObservationsResponse> {
    return this.get(`/ref/obs/geo/recent/notable`, Object.keys(request), request);
  }

  public async recentNearbyObservations(request: IRecentNearbyObservationsRequest): Promise<void | IRecentNearbyObservationsResponse> {
    return this.get(`/ref/obs/geo/recent`, Object.keys(request), request);
  }

  public async recentNearbyObservationsOfASpecies(request: IRecentNearbyObservationsOfASpeciesRequest): Promise<void | IRecentNearbyObservationsOfASpeciesResponse> {
    return this.get(`/ref/obs/geo/recent/${request.speciesCode}`, Object.keys(request), request);
  }

  public async recentNotableObservationsInARegion(request: IRecentNotableObservationsInARegionRequest): Promise<void | IRecentNotableObservationsInARegionResponse> {
    return this.get(`/data/obs/${request.regionCode}/recent/notable`, ["back", "cat", "maxResults", "includeProvisional", "hotspot", "r"], request);
  }

  public async taxonomy(request: ITaxonomyRequest): Promise<void | ITaxonomyResponse> {
    return this.get(`/ref/taxonomy/ebird`, Object.keys(request), request);
  }

  private async get<Req, Res>(url: string, queryStringKeys: string[], request: Req): Promise<void | Res> {
    const queryString = this.generateQueryString(queryStringKeys, request);
    const response = await this.ebirdHttp
      .get<Res>(`${url}?${queryString}`);
    return response.data;
  }

  private generateQueryString(keys: string[], value: any): string {
    const components = [];
    for (const key in keys) {
      if (value.hasOwnProperty(key)) {
        const field = value[key];
        if (field === undefined) {
          continue;
        } else if (field instanceof Array) {
          components.push(`${key}=${field.join(",")}`);
        } else {
          components.push(`${key}=${field.toString()}`);
        }
      }
    }
    return components.join("&");
  }
}
