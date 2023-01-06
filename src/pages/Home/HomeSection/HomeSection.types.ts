export interface IHomePart {
  value: string | null;
  count: number;
}

export interface IHomeAges {
  range1822: number | null;
  range2225: number | null;
  range2530: number | null;
  range3040: number | null;
  range4050: number | null;
  range5065: number | null;
  range65: number | null;
}

export interface IHomeSection {
  ages: IHomeAges;
  religions: IHomePart[];
  genders: IHomePart[];
  hobbies: IHomePart[];
  status: IHomePart[];
  cities: IHomePart[];
  count: number;
}
