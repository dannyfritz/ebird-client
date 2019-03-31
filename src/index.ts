import axios, { AxiosInstance } from "axios";
import * as _ from "lodash";
import { IRecentNearbyNotableObservationsRequest, IRecentNearbyNotableObservationsResponse } from "./api/IRecentNearbyNotableObservations";
import { IRecentNearbyObservationsRequest, IRecentNearbyObservationsResponse } from "./api/IRecentNearbyObservations";
import { ITaxonomyRequest, ITaxonomyResponse } from "./api/ITaxonomy";

export default class EbirdClient {
  private ebirdHttp: AxiosInstance;

  constructor(ebirdApiKey: string) {
    this.ebirdHttp = axios.create({
      baseURL: "https://ebird.org/ws2.0",
      headers: { "x-ebirdapitoken": ebirdApiKey },
    });
  }

  public async recentNearbyNotableObservations(request: IRecentNearbyNotableObservationsRequest): Promise<void | IRecentNearbyNotableObservationsResponse> {
    return this.get(`/ref/obs/geo/recent/notable`, request);
  }

  public async recentNearbyObservations(request: IRecentNearbyObservationsRequest): Promise<void | IRecentNearbyObservationsResponse> {
    return this.get(`/ref/obs/geo/recent`, request);
  }

  public async taxonomy(request: ITaxonomyRequest): Promise<void | ITaxonomyResponse> {
    return this.get(`/ref/taxonmy/ebird`, request);
  }

  private async get<Req, Res>(url: string, request: Req): Promise<void | Res> {
    const queryString = this.generateQueryString(request);
    const response = await this.ebirdHttp
      .get<Res>(`${url}?${queryString}`);
    return response.data;
  }

  private generateQueryString(value: any): string {
    const components = [];
    for (const key in Object.keys(value)) {
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
