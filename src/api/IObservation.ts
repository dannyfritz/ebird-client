export type IObservation = IObservationSimple | IObservationFull;

export interface IObservationSimple {
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

export type IObservationFull = IObservationSimple & {
  subnational2Code: string,
  subnational2Name: string,
  subnational1Code: string,
  subnational1Name: string,
  countryCode: string,
  countryName: string,
  userDisplayName: string,
  subId: string,
  obsId: string,
  checklistId: string,
  presenceNoted: boolean,
  hasComments: boolean,
  firstName: string,
  lastName: string,
  hasRichMedia: boolean,
  locID: string,
}
