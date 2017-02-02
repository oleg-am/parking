import { combineReducers } from 'redux';
import * as types from './constants';

const initialState = {
  parking: {
    numberOfPlaces: 30,
  },
  cars: {
    trucks: 10,
    disableds: 5,
    sedans: 15,
  },
};

export default combineReducers({
  parking(state = initialState.parking, action) {
    switch (action.type) {
      case types.CREATE_PARKING:
      case types.CHANGE_NUMBER_OF_PARKING_PLACES:
        return {
          ...state,
          numberOfPlaces: action.numberOfPlaces,
        };
      case types.RESET_PARKING:
        return initialState.parking;
      default:
        return state;
    }
  },
  cars(state = initialState.cars, action) {
    switch (action.type) {
      case types.CHANGE_NUMBER_OF_CARS:
        return {
          ...state,
          ...action.numberOfCars,
        };
      case types.RESET_PARKING:
        return initialState.entities;
      default:
        return state;
    }
  },
});
