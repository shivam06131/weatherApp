import { SetStateAction } from "react";

export interface ICustomTypographyProps {
  component?: React.Component;
  condition: boolean;
  temperatureData?: string;
  typegraphystyles?: any; //styles
  additionalProps?: any; //styles
  typegraphyData: string | number;
  loaderHeightWidth?: string;
}

export interface Icordinates {
  latitude: number;
  longitude: number;
}

export interface ICustomHeaderProps {
  propData: IPropData;
}
export interface IPropData {
  searchText: string;
  setSearchText: React.Dispatch<SetStateAction<string>>;
}

export interface ICustomCardProps {
  isCustomised?: boolean;
  customisedData?: string;
  criteriaChanged?: boolean;
}

export interface IdailyWeatherData {
  time: string;
  temperature: number;
}

export interface ICustomSelectProps {
  setVariable: string;
  data: IdailyWeatherData[] | string[];
  inputCategory?: string;
  filteringCriteria?: string;
  haveCriteriaChanged?: boolean;
  selectTwo?: boolean;
  setHavecriteriaChanged?: React.Dispatch<SetStateAction<boolean>>;
  // setterFunction: any;
  setCriteriaChanged?: React.Dispatch<SetStateAction<boolean>>;
}
export interface ICityCardContainer {
  cityListData: ICityListData[];
  setCityListData: React.Dispatch<SetStateAction<ICityListData[]>>;
}
export interface ICustomisedCardContainerProps {
  customisedData: string | number;
}

export interface ICityCardProps {
  city: ICity;
}

export interface ICity {
  currentCity?: string;
  temperature?: number;
  latitude?: number;
  longitude?: number;
  stateDistrict?: string;
  Country?: string;
}

export interface ICityListData {
  Country: string;
  currentCity: string;
  latitude: number;
  longitude: number;
  stateDistrict: string | any;
  temperature: number;
}

export interface ICityDataMapped {
  country: string;
  district: string;
  suburb: string;
}

export interface IWeatherDataMapped {
  currentTemperature: number;
  temperatureExtended: number[];
  timeExtended: string[];
  unit: string;
  latitude: number,
  longitude: number,
}

export interface ICustomCityInfo extends ICity {
  isCustomCityEnabled : boolean,
}