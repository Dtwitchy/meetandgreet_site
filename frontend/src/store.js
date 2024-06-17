import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './reducers/bookingReducers';

const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
});

export default store;