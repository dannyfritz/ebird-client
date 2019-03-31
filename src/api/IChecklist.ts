export interface IChecklist {
  locId: string;
  userDisplayName: string;
  numSpecies: number;
  obsDt: string;
  obsTime: string;
  obsMonth: string;
  obsDay: number;
  obsYear: number;
  loc: {
    locId: string;
    name: string;
    latitude: number;
    longitude: number;
    countryCode: string;
    countryName: string;
    subnational1Name: string;
    subnational1Code: string;
    subnational2Code: string;
    subnational2Name: string;
    isHotspot: boolean;
    locName: string;
    lat: number;
    lng: number;
    hierarchicalName: string;
  };
}
