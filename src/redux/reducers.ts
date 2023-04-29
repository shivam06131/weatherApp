import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IdailyWeatherData} from '../utils/type/types';

interface WeatherState {
  value: number;
  dailyWeatherData: IdailyWeatherData[],
  selectedCriteria: string,
  selectedTime: string,
  selectedCriteriaData: IdailyWeatherData[],
}

const initialState: WeatherState = {
  value: 0,
  dailyWeatherData: [{ temperature: 0, time: '' }],
  selectedCriteria: '',
  selectedTime: '',
  selectedCriteriaData: [{
    time : '',
    temperature: 0
  }]
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    updateDailyWeatherData: (state , action: PayloadAction<IdailyWeatherData[]>) => {
      state.dailyWeatherData = [...state.dailyWeatherData , ...action?.payload ];
    },
    updateSelectedCriteria : (state , action : PayloadAction<string> ) =>{
      state.selectedCriteria = action.payload;
    },
    updateSelectedTime: (state, action : PayloadAction<string>) => {
      state.selectedTime = action.payload;
    },
    updateSelectedCriteriaData: (state, action : PayloadAction<IdailyWeatherData[]>) => {
      state.selectedCriteriaData = action.payload;
    }
  },
});

export const { updateDailyWeatherData,updateSelectedCriteria,updateSelectedTime,updateSelectedCriteriaData } = weatherSlice.actions;

export default weatherSlice.reducer;
