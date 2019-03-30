import axios, {AxiosInstance} from "axios";

export interface IRecentObservationsInARegionRequest {
    latitude: number;
    longitude: number;
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
            `/data/obs/geo/recent?lat=${request.latitude}&lng=${request.longitude}`,
        )
            .then((response) => response.data)
            .catch((error) => console.error(error));
    }
}
