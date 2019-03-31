import axios, { AxiosInstance } from "axios";
import _ from "lodash";
import { AdjacentRegionsParams, AdjacentRegionsUrl, IAdjacentRegionsRequest, IAdjacentRegionsResponse } from "./api/AdjacentRegions";
import { ChecklistFeedOnADateParams, ChecklistFeedOnADateUrl, IChecklistFeedOnADateRequest, IChecklistFeedOnADateResponse } from "./api/ChecklistFeedOnADate";
import { HistoricObservationsOnADateParams, HistoricObservationsOnADateUrl, IHistoricObservationsOnADateRequest, IHistoricObservationsOnADateResponse } from "./api/HistoricObservationsOnADate";
import { HotspotInfoParams, HotspotInfoUrl, IHotspotInfoRequest, IHotspotInfoResponse } from "./api/HotspotInfo";
import { HotspotsInARegionParams, HotspotsInARegionUrl, IHotspotsInARegionRequest, IHotspotsInARegionResponse } from "./api/HotspotsInARegion";
import { INearbyHotspotsRequest, INearbyHotspotsResponse, NearbyHotspotsParams, NearbyHotspotsUrl } from "./api/NearbyHotspots";
import { INearestObservationOfASpeciesResponse, INearestObservationsOfASpeciesRequest, NearestObservationsOfASpeciesParams, NearestObservationsOfASpeciesUrl } from "./api/NearestObservationsOfASpecies";
import { IRecentChecklistsFeedRequest, IRecentChecklistsFeedResponse, RecentChecklistsFeedParams, RecentChecklistsFeedUrl } from "./api/RecentChecklistsFeed";
import { IRecentNearbyNotableObservationsRequest, IRecentNearbyNotableObservationsResponse, RecentNearbyNotableObservationsParams, RecentNearbyNotableObservationsUrl } from "./api/RecentNearbyNotableObservations";
import { IRecentNearbyObservationsRequest, IRecentNearbyObservationsResponse, RecentNearbyObservationsParams, RecentNearbyObservationsUrl } from "./api/RecentNearbyObservations";
import { IRecentNearbyObservationsOfASpeciesRequest, IRecentNearbyObservationsOfASpeciesResponse, RecentNearbyObservationsOfASpeciesParams, RecentNearbyObservationsOfASpeciesUrl } from "./api/RecentNearbyObservationsOfASpecies";
import { IRecentNotableObservationsInARegionRequest, IRecentNotableObservationsInARegionResponse, RecentNotableObservationsInARegionUrl } from "./api/RecentNotableObservationsInARegion";
import { IRecentObservationsInARegionRequest, IRecentObservationsInARegionResponse, RecentObservationsInARegionParams, RecentObservationsInARegionUrl } from "./api/RecentObservationsInARegion";
import { IRecentObservationsOfASpeciesInARegionRequest, IRecentObservationsOfASpeciesInARegionResponse, RecentObservationsOfASpeciesInARegionParams, RecentObservationsOfASpeciesInARegionUrl } from "./api/RecentObservationsOfASpeciesInARegion";
import { IRegionalStatisticsOnADateRequest, IRegionalStatisticsOnADateResponse, RegionalStatisticsOnADateParams, RegionalStatisticsOnADateUrl } from "./api/RegionalStatisticsOnADate";
import { IRegionInfoRequest, IRegionInfoResponse, RegionInfoParams, RegionInfoUrl } from "./api/RegionInfo";
import { ISubRegionListRequest, ISubRegionListResponse, SubRegionListParams, SubRegionListUrl } from "./api/SubRegionList";
import { ITaxonomicFormsRequest, ITaxonomicFormsResponse, TaxonomicFormsParams, TaxonomicFormsUrl } from "./api/TaxonomicForms";
import { ITaxonomicGroupsRequest, ITaxonomicGroupsResponse, TaxonomicGroupsParams, TaxonomicGroupsUrl } from "./api/TaxonomicGroups";
import { ITaxonomyRequest, ITaxonomyResponse, TaxonomyParams, TaxonomyUrl } from "./api/Taxonomy";
import { ITaxonomyVersionsRequest, ITaxonomyVersionsResponse, TaxonomyVersionsParams, TaxonomyVersionsUrl } from "./api/TaxonomyVersions";
import { ITop100Request, ITop100Response, Top100Params, Top100Url } from "./api/Top100";
import { IViewChecklistRequest, IViewChecklistResponse, ViewChecklistParams, ViewChecklistUrl } from "./api/ViewChecklist";

export default class EbirdClient {
  private ebirdHttp: AxiosInstance;

  constructor(ebirdApiKey: string) {
    this.ebirdHttp = axios.create({
      baseURL: "https://ebird.org/ws2.0",
      headers: { "x-ebirdapitoken": ebirdApiKey },
    });
  }

  public async adjacentRegions(request: IAdjacentRegionsRequest): Promise<void | IAdjacentRegionsResponse> {
    return this.get(AdjacentRegionsUrl, AdjacentRegionsParams, request);
  }

  public async checklistFeedOnADate(request: IChecklistFeedOnADateRequest): Promise<void | IChecklistFeedOnADateResponse> {
    return this.get(ChecklistFeedOnADateUrl, ChecklistFeedOnADateParams, request);
  }

  public async historicObservationsOnADate(request: IHistoricObservationsOnADateRequest): Promise<void | IHistoricObservationsOnADateResponse> {
    return this.get(HistoricObservationsOnADateUrl, HistoricObservationsOnADateParams, request);
  }

  public async hotspotsInARegion(request: IHotspotsInARegionRequest): Promise<void | IHotspotsInARegionResponse> {
    return this.get(HotspotsInARegionUrl, HotspotsInARegionParams, request);
  }

  public async hotspotInfo(request: IHotspotInfoRequest): Promise<void | IHotspotInfoResponse> {
    return this.get(HotspotInfoUrl, HotspotInfoParams, request);
  }

  public async nearbyHotspots(request: INearbyHotspotsRequest): Promise<void | INearbyHotspotsResponse> {
    return this.get(NearbyHotspotsUrl, NearbyHotspotsParams, request);
  }

  public async nearestObservationsOfASpecies(request: INearestObservationsOfASpeciesRequest): Promise<void | INearestObservationOfASpeciesResponse> {
    return this.get(NearestObservationsOfASpeciesUrl, NearestObservationsOfASpeciesParams, request);
  }

  public async recentChecklistsFeed(request: IRecentChecklistsFeedRequest): Promise<void | IRecentChecklistsFeedResponse> {
    return this.get(RecentChecklistsFeedUrl, RecentChecklistsFeedParams, request);
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

  public async regionalStatisticsOnADate(request: IRegionalStatisticsOnADateRequest): Promise<void | IRegionalStatisticsOnADateResponse> {
    return this.get(RegionalStatisticsOnADateUrl, RegionalStatisticsOnADateParams, request);
  }

  public async regionInfo(request: IRegionInfoRequest): Promise<void | IRegionInfoResponse> {
    return this.get(RegionInfoUrl, RegionInfoParams, request);
  }

  public async subRegionList(request: ISubRegionListRequest): Promise<void | ISubRegionListResponse> {
    return this.get(SubRegionListUrl, SubRegionListParams, request);
  }

  public async taxonomicForms(request: ITaxonomicFormsRequest): Promise<void | ITaxonomicFormsResponse> {
    return this.get(TaxonomicFormsUrl, TaxonomicFormsParams, request);
  }

  public async taxonomicGroups(request: ITaxonomicGroupsRequest): Promise<void | ITaxonomicGroupsResponse> {
    return this.get(TaxonomicGroupsUrl, TaxonomicGroupsParams, request);
  }

  public async taxonomy(request: ITaxonomyRequest): Promise<void | ITaxonomyResponse> {
    return this.get(TaxonomyUrl, TaxonomyParams, request);
  }

  public async taxonomyVersions(request: ITaxonomyVersionsRequest): Promise<void | ITaxonomyVersionsResponse> {
    return this.get(TaxonomyVersionsUrl, TaxonomyVersionsParams, request);
  }

  public async top100(request: ITop100Request): Promise<void | ITop100Response> {
    return this.get(Top100Url, Top100Params, request);
  }

  public async viewChecklist(request: IViewChecklistRequest): Promise<void | IViewChecklistResponse> {
    return this.get(ViewChecklistUrl, ViewChecklistParams, request);
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
