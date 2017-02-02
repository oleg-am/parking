import * as types from './constants';

export const createParking = numberOfPlaces => ({
  type: types.CREATE_PARKING, numberOfPlaces
});

export const changeNumberOfParkingPlaces = numberOfPlaces => ({
  type: types.CHANGE_NUMBER_OF_PARKING_PLACES, numberOfPlaces
});

export const changeNumberOfCars = (numberOfCars = {}) => ({
  type: types.CHANGE_NUMBER_OF_CARS, numberOfCars
});

export const resetParking = () => ({
  type: types.RESET_PARKING,
});


export const load = () => ({ // eslint-disable-line import/prefer-default-export
  types: [types.LOAD_REQUEST, types.LOAD_SUCCESS, types.LOAD_FAILURE],
  promise: api => api.get('/api/parking'),
});
