import { Category } from "../constants/Category";

export interface ISpecies {
  sciName: string;
  comName: string;
  speciesCode: string;
  category: Category;
  taxonOrder: number;
  bandingCodes: string;
  comNameCodes: string;
  sciNameCodes: string;
  order: string;
  familyComName: string;
  familySciName: string;
}
