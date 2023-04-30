import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICity, ICityListData, ICustomCityInfo, IdailyWeatherData } from '../utils/type/types';

interface WeatherState {
  value: number;
  dailyWeatherData: IdailyWeatherData[],
  selectedCriteria: string,
  selectedTime: string,
  selectedCriteriaData: IdailyWeatherData[],
  cityListData: ICityListData[],
  searchText: string,
  customCityInfo: ICustomCityInfo,
  debouncedSearchText: string[],
}

const initialState: WeatherState = {
  value: 0,
  dailyWeatherData: [{ temperature: 0, time: '' }],
  selectedCriteria: '',
  selectedTime: '',
  selectedCriteriaData: [{
    time: '',
    temperature: 0
  }],
  cityListData: [...[
    ...(JSON.parse(localStorage.getItem("cityListData") as string) ?? []),
  ]],
  searchText: '',
  customCityInfo: {
    isCustomCityEnabled: false,
  },
  debouncedSearchText:[]
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    updateDailyWeatherData: (state, action: PayloadAction<IdailyWeatherData[]>) => {
      state.dailyWeatherData = [ ...action?.payload];
    },
    updateSelectedCriteria: (state, action: PayloadAction<string>) => {
      state.selectedCriteria = action.payload;
    },
    updateSelectedTime: (state, action: PayloadAction<string>) => {
      state.selectedTime = action.payload;
    },
    updateSelectedCriteriaData: (state, action: PayloadAction<IdailyWeatherData[]>) => {
      state.selectedCriteriaData = action.payload;
    },
    updateCityListData: (state, action: PayloadAction<ICityListData[]>) => {
      state.cityListData = action.payload;
    },
    updateSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    updateCustomCityInfo: (state, action: PayloadAction<ICustomCityInfo>) => {
      state.customCityInfo = action.payload;
    },
    updateDebouncedSearchText: (state, action: PayloadAction<string[]>) => {
      state.debouncedSearchText = action.payload;
    },
  },
});

export const { updateDailyWeatherData, updateSelectedCriteria, updateSelectedTime, updateSelectedCriteriaData, updateCityListData, updateSearchText ,updateCustomCityInfo, updateDebouncedSearchText} = weatherSlice.actions;

export default weatherSlice.reducer;
