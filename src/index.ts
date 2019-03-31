import axios, { AxiosInstance } from "axios";
import _ from "lodash";
import { HistoricObservationsOnADateParams, HistoricObservationsOnADateUrl, IHistoricObservationsOnADateRequest, IHistoricObservationsOnADateResponse } from "./api/HistoricObservationsOnADate";
import { ITaxonomyRequest, ITaxonomyResponse, TaxonomyParams, TaxonomyUrl } from "./api/ITaxonomy";
import { ITop100Request, ITop100Response, Top100Params, Top100Url } from "./api/ITop100";
import { INearestObservationOfASpeciesResponse, INearestObservationsOfASpeciesRequest, NearestObservationsOfASpeciesParams, NearestObservationsOfASpeciesUrl } from "./api/NearestObservationsOfASpecies";
import { IRecentNearbyNotableObservationsRequest, IRecentNearbyNotableObservationsResponse, RecentNearbyNotableObservationsParams, RecentNearbyNotableObservationsUrl } from "./api/RecentNearbyNotableObservations";
import { IRecentNearbyObservationsRequest, IRecentNearbyObservationsResponse, RecentNearbyObservationsParams, RecentNearbyObservationsUrl } from "./api/RecentNearbyObservations";
import { IRecentNearbyObservationsOfASpeciesRequest, IRecentNearbyObservationsOfASpeciesResponse, RecentNearbyObservationsOfASpeciesParams, RecentNearbyObservationsOfASpeciesUrl } from "./api/RecentNearbyObservationsOfASpecies";
import { IRecentNotableObservationsInARegionRequest, IRecentNotableObservationsInARegionResponse, RecentNotableObservationsInARegionUrl } from "./api/RecentNotableObservationsInARegion";
import { IRecentObservationsInARegionRequest, IRecentObservationsInARegionResponse, RecentObservationsInARegionParams, RecentObservationsInARegionUrl } from "./api/RecentObservationsInARegion";
import { IRecentObservationsOfASpeciesInARegionRequest, IRecentObservationsOfASpeciesInARegionResponse, RecentObservationsOfASpeciesInARegionParams, RecentObservationsOfASpeciesInARegionUrl } from "./api/RecentObservationsOfASpeciesInARegion";

export default class EbirdClient {
  private ebirdHttp: AxiosInstance;

  constructor(ebirdApiKey: string) {
    this.ebirdHttp = axios.create({
      baseURL: "https://ebird.org/ws2.0",
      headers: { "x-ebirdapitoken": ebirdApiKey },
    });
  }

  public async historicObservationsOnADate(request: IHistoricObservationsOnADateRequest): Promise<void | IHistoricObservationsOnADateResponse> {
    return this.get(HistoricObservationsOnADateUrl, HistoricObservationsOnADateParams, request);
  }

  public async nearestObservationsOfASpecies(request: INearestObservationsOfASpeciesRequest): Promise<void | INearestObservationOfASpeciesResponse> {
    return this.get(NearestObservationsOfASpeciesUrl, NearestObservationsOfASpeciesParams, request);
  }

  public async recentObservationsInARegion(request: IRecentObservationsInARegionRequest): Promise<void | IRecentObservationsInARegionResponse> {
    return this.get(RecentObservationsInARegionUrl, RecentObservationsInARegionParams, request);
  }

  public async recentObservationsOfASpeciesInARegion(request: IRecentObservationsOfASpeciesInARegionRequest): Promise<void | IRecentObservationsOfASpeciesInARegionResponse> {
    return this.get(RecentObservationsOfASpeciesInARegionUrl, RecentObservationsOfASpeciesInARegionParams, request);
  }

  public async recentNearbyNotableObservations(request: IRecentNearbyNotableObservationsRequest): Promise<void | IRecentNearbyNotableObservationsResponse> {
    return this.get(RecentNearbyNotableObservationsUrl, RecentNearbyNotableObservationsParams, request);
  }

  public async recentNearbyObservations(request: IRecentNearbyObservationsRequest): Promise<void | IRecentNearbyObservationsResponse> {
    return this.get(RecentNearbyObservationsUrl, RecentNearbyObservationsParams, request);
  }

  public async recentNearbyObservationsOfASpecies(request: IRecentNearbyObservationsOfASpeciesRequest): Promise<void | IRecentNearbyObservationsOfASpeciesResponse> {
    return this.get(RecentNearbyObservationsOfASpeciesUrl, RecentNearbyObservationsOfASpeciesParams, request);
  }

  public async recentNotableObservationsInARegion(request: IRecentNotableObservationsInARegionRequest): Promise<void | IRecentNotableObservationsInARegionResponse> {
    return this.get(RecentNotableObservationsInARegionUrl, RecentObservationsInARegionParams, request);
  }

  public async taxonomy(request: ITaxonomyRequest): Promise<void | ITaxonomyResponse> {
    return this.get(TaxonomyUrl, TaxonomyParams, request);
  }

  public async top100(request: ITop100Request): Promise<void | ITop100Response> {
    return this.get(Top100Url, Top100Params, request);
  }

  private async get<Req, Res>(urlFn: (req: Req) => string, queryStringKeys: string[], request: Req): Promise<void | Res> {
    const queryString = this.generateQueryString(queryStringKeys, request);
    const response = await this.ebirdHttp
      .get<Res>(`${urlFn(request)}?${queryString}`);
    return response.data;
  }

  private generateQueryString(keys: string[], value: any): string {
    const components = [];
    for (const key of keys) {
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
