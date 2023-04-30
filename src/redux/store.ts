import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import rootReducer from './reducers';

const store = configureStore({
  reducer : rootReducer,
  //disable dev tool in production
  devTools : process.env.NODE_ENV === 'production' ? false : true,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
