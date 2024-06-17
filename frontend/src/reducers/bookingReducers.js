import { BOOKING_CREATE_REQUEST, BOOKING_CREATE_SUCCESS, BOOKING_CREATE_FAIL } from '../constants/bookingConstants';

const initialState = {
  loading: false,
  success: false,
  error: null,
  booking: null,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BOOKING_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        booking: action.payload,
      };
    case BOOKING_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bookingReducer;