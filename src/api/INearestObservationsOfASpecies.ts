import { Category } from "../constants/Category";
import { Sort } from "../constants/Sort";
import { IObservation } from "../interfaces/IObservation";

export interface INearestObservationsOfASpeciesRequest {
  speciesCode: string;
  lat: number;
  lng: number;
  dist?: number;
  back?: number;
  maxResults?: number;
  includeProvisional?: boolean;
  hotspot?: boolean;
}

export type INearestOBservationOfASpeciesResponse = IObservation[];
