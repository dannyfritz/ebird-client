import axios, {AxiosInstance} from "axios";

export interface IRecentObservationsInARegionRequest {
  lat: number;
  lng: number;
}

export type IRecentObservationsInARegionResponse = IObservation[];

export interface IObservation {
  speciesCode: string;
  comName: string;
  sciName: string;
  locId: string;
  locName: string;
  obsDt: string;
  howMany: number;
  lat: number;
  lng: number;
  obsValid: boolean;
  obsReviewed: boolean;
  locationPrivate: boolean;
}

export enum Category {
  ALL = "all",
  DOMESTIC = "domestic",
  FORM = "form",
  HYBRID = "hybrid",
  INTERGRADE = "intergrade",
  ISSF = "issf",
  SLASH = "slash",
  SPECIES = "species",
  SPUH = "spuh",
}

export enum BandingCode {}

export enum ComNameCode {}

export enum Format {
  CSV = "csv",
  JSON = "json",
}

export interface ITaxonomyRequest {
  cat?: Category[];
  species?: string[];
  locale?: string;
  fmt?: Format;
  version?: number;
}

export interface ISpecies {
  sciName: string;
  comName: string;
  speciesCode: string;
  category: Category;
  taxonOrder: number;
  bandingCodes: BandingCode[];
  comNameCodes: ComNameCode[];
  sciNameCodes: string[];
  order: string;
  familyComName: string;
  familySciName: string;
}

export type ITaxonomyResponse = ISpecies[];

export default class EbirdClient {
  private ebirdHttp: AxiosInstance;
  constructor(ebirdApiKey: string) {
    this.ebirdHttp = axios.create({
      baseURL: "https://ebird.org/ws2.0",
      headers: {"x-ebirdapitoken": ebirdApiKey},
    });
  }

  public recentObservationsInARegion(
    request: IRecentObservationsInARegionRequest,
  ): Promise<void | IRecentObservationsInARegionResponse> {
    return this.ebirdHttp
      .get<IRecentObservationsInARegionResponse>(
        `/data/obs/geo/recent?lat=${request.lat}&lng=${request.lng}`,
      )
      .then((response) => response.data);
  }

  public recentNotableObservationsInARegion(
    request: IRecentObservationsInARegionRequest,
  ): Promise<void | IRecentObservationsInARegionResponse> {
    return this.ebirdHttp
      .get<IRecentObservationsInARegionResponse>(
        `/data/obs/geo/recent/notable?lat=${request.lat}&lng=${request.lng}`,
      )
      .then((response) => response.data);
  }

  public taxonomy(
    request: ITaxonomyRequest,
  ): Promise<void | ITaxonomyResponse> {
    const url = `/ref/taxonomy/ebird`;
    const components: string[] = [];
    if (request.cat) { components.push(`cat=${request.cat.join(",")}`); }
    if (request.species) { components.push(`species=${request.species.join(",")}`); }
    if (request.fmt) { components.push(`fmt=${request.fmt}`); }
    if (request.locale) { components.push(`locale=${request.locale}`); }
    if (request.version) { components.push(`version=${request.version.toString()}`); }
    return this.ebirdHttp
    .get<ITaxonomyResponse>(`${url}?${components.join("&")}`)
      .then((response) => response.data);
  }
}
