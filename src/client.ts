import axios, { AxiosInstance } from "axios";
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
import { IRecentNotableObservationsInARegionRequest, IRecentNotableObservationsInARegionResponse, RecentNotableObservationsInARegionParams, RecentNotableObservationsInARegionUrl } from "./api/RecentNotableObservationsInARegion";
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

export class EbirdClient {
  private ebirdHttp: AxiosInstance;

  constructor(ebirdApiKey: string) {
    this.ebirdHttp = axios.create({
      baseURL: "https://ebird.org/ws2.0",
      headers: { "x-ebirdapitoken": ebirdApiKey },
    });
  }

  public adjacentRegions(request: IAdjacentRegionsRequest): Promise<IAdjacentRegionsResponse> {
    return this.get(AdjacentRegionsUrl, AdjacentRegionsParams, request);
  }

  public checklistFeedOnADate(request: IChecklistFeedOnADateRequest): Promise<IChecklistFeedOnADateResponse> {
    return this.get(ChecklistFeedOnADateUrl, ChecklistFeedOnADateParams, request);
  }

  public historicObservationsOnADate(request: IHistoricObservationsOnADateRequest): Promise<IHistoricObservationsOnADateResponse> {
    return this.get(HistoricObservationsOnADateUrl, HistoricObservationsOnADateParams, request);
  }

  public hotspotsInARegion(request: IHotspotsInARegionRequest): Promise<IHotspotsInARegionResponse> {
    return this.get(HotspotsInARegionUrl, HotspotsInARegionParams, request);
  }

  public hotspotInfo(request: IHotspotInfoRequest): Promise<IHotspotInfoResponse> {
    return this.get(HotspotInfoUrl, HotspotInfoParams, request);
  }

  public nearbyHotspots(request: INearbyHotspotsRequest): Promise<INearbyHotspotsResponse> {
    return this.get(NearbyHotspotsUrl, NearbyHotspotsParams, request);
  }

  public nearestObservationsOfASpecies(request: INearestObservationsOfASpeciesRequest): Promise<INearestObservationOfASpeciesResponse> {
    return this.get(NearestObservationsOfASpeciesUrl, NearestObservationsOfASpeciesParams, request);
  }

  public recentChecklistsFeed(request: IRecentChecklistsFeedRequest): Promise<IRecentChecklistsFeedResponse> {
    return this.get(RecentChecklistsFeedUrl, RecentChecklistsFeedParams, request);
  }

  public recentNearbyNotableObservations(request: IRecentNearbyNotableObservationsRequest): Promise<IRecentNearbyNotableObservationsResponse> {
    return this.get(RecentNearbyNotableObservationsUrl, RecentNearbyNotableObservationsParams, request);
  }

  public recentNearbyObservations(request: IRecentNearbyObservationsRequest): Promise<IRecentNearbyObservationsResponse> {
    return this.get(RecentNearbyObservationsUrl, RecentNearbyObservationsParams, request);
  }

  public recentNearbyObservationsOfASpecies(request: IRecentNearbyObservationsOfASpeciesRequest): Promise<IRecentNearbyObservationsOfASpeciesResponse> {
    return this.get(RecentNearbyObservationsOfASpeciesUrl, RecentNearbyObservationsOfASpeciesParams, request);
  }

  public recentNotableObservationsInARegion(request: IRecentNotableObservationsInARegionRequest): Promise<IRecentNotableObservationsInARegionResponse> {
    return this.get(RecentNotableObservationsInARegionUrl, RecentNotableObservationsInARegionParams, request);
  }

  public recentObservationsInARegion(request: IRecentObservationsInARegionRequest): Promise<IRecentObservationsInARegionResponse> {
    return this.get(RecentObservationsInARegionUrl, RecentObservationsInARegionParams, request);
  }

  public recentObservationsOfASpeciesInARegion(request: IRecentObservationsOfASpeciesInARegionRequest): Promise<IRecentObservationsOfASpeciesInARegionResponse> {
    return this.get(RecentObservationsOfASpeciesInARegionUrl, RecentObservationsOfASpeciesInARegionParams, request);
  }

  public regionalStatisticsOnADate(request: IRegionalStatisticsOnADateRequest): Promise<IRegionalStatisticsOnADateResponse> {
    return this.get(RegionalStatisticsOnADateUrl, RegionalStatisticsOnADateParams, request);
  }

  public regionInfo(request: IRegionInfoRequest): Promise<IRegionInfoResponse> {
    return this.get(RegionInfoUrl, RegionInfoParams, request);
  }

  public subRegionList(request: ISubRegionListRequest): Promise<ISubRegionListResponse> {
    return this.get(SubRegionListUrl, SubRegionListParams, request);
  }

  public taxonomicForms(request: ITaxonomicFormsRequest): Promise<ITaxonomicFormsResponse> {
    return this.get(TaxonomicFormsUrl, TaxonomicFormsParams, request);
  }

  public taxonomicGroups(request: ITaxonomicGroupsRequest): Promise<ITaxonomicGroupsResponse> {
    return this.get(TaxonomicGroupsUrl, TaxonomicGroupsParams, request);
  }

  public taxonomy(request: ITaxonomyRequest): Promise<ITaxonomyResponse> {
    return this.get(TaxonomyUrl, TaxonomyParams, request);
  }

  public taxonomyVersions(request: ITaxonomyVersionsRequest): Promise<ITaxonomyVersionsResponse> {
    return this.get(TaxonomyVersionsUrl, TaxonomyVersionsParams, request);
  }

  public top100(request: ITop100Request): Promise<ITop100Response> {
    return this.get(Top100Url, Top100Params, request);
  }

  public viewChecklist(request: IViewChecklistRequest): Promise<IViewChecklistResponse> {
    return this.get(ViewChecklistUrl, ViewChecklistParams, request);
  }

  private async get<Req, Res>(urlFn: (req: Req) => string, queryStringKeys: string[], request: Req): Promise<Res> {
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
