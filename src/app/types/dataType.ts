export interface earthquakeDataType {
  rms: string;
  eventID: string;
  location: string;
  latitude: string;
  longitude: string;
  depth: string;
  type: string;
  magnitude: string;
  country: string;
  province: string;
  district: string;
  neighborhood: string | null;
  date: string;
  isEventUpdate: boolean;
  lastUpdateDate: string | null;
}

export interface responceType {
  datas: Array<earthquakeDataType>;
}
export interface MapType {
  datas: Array<earthquakeDataType>;
  selectedEarthquake: number | null;
  setSelectedEarthquake: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface EarthquakesType {
  datas: Array<earthquakeDataType>;
  onEarthquakeClick: (earthquakeId: number) => void;
}