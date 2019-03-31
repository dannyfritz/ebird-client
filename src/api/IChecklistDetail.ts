export interface IChecklistDetailObsAux {
  fieldName: string;
  entryMethodCode: string;
  auxCode: string;
  value: string;
}

export interface IChecklistDetailObs {
  speciesCode: string;
  obsDt: string;
  obsId: string;
  howManyStr: string;
  obsAux: IChecklistDetailObsAux[];
}

export interface IChecklistDetail {
  projId: string;
  subId: string;
  protocolId: string;
  locId: string;
  durationHrs: number;
  allObsReported: boolean;
  creationDt: string;
  lastEditedDt: string;
  obsDt: string;
  obsTimeValid: boolean;
  checklistId: string;
  numObservers: number;
  effortDistanceKm: number;
  effortDistanceEnteredUnit: string;
  subnational1Code: string;
  submissionMethodCode: string;
  submissionMethodVersion: string;
  userDisplayName: string;
  submissionMethodVersionDisp: string;
  obs: IChecklistDetailObs[];
}
