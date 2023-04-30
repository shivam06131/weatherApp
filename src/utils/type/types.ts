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
  setDailyWeatherData: React.Dispatch<SetStateAction<IdailyWeatherData[]>>;
  dailyWeatherData: IdailyWeatherData[];
  isCustomised?: boolean;
  customisedData?: string;
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
  setterFunction: React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<string>>;
  setCriteriaChanged?: React.Dispatch<SetStateAction<boolean>>;
}
export interface ICityCardContainer {
  cityListData: ICityListData[];
  setCityListData: React.Dispatch<SetStateAction<ICityListData[]>>;
}
export interface ICustomisedCardContainerProps {
  selectedCriteria: string;
  selectedCriteriaData: IdailyWeatherData[];
  selectedTime: string;
  customisedData: string | number;
  list: string[];
  setSelectedCriteria: React.Dispatch<SetStateAction<string>>;
  setSelectedTime: React.Dispatch<SetStateAction<string>>;
  setDailyWeatherData: React.Dispatch<SetStateAction<IdailyWeatherData[]>>;
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
  stateDistrict: string;
  temperature: number;
}
