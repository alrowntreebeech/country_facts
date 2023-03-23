import { configureStore } from '@reduxjs/toolkit';
import searchPageReducer from '../components/searchPage/searchPageSlice';
import countryPageReducer from '../components/countryPage/countryPageSlice';

export const store = configureStore({
  reducer: {
    searchPage: searchPageReducer,
    countryPage: countryPageReducer
  },
});
