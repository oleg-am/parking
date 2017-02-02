import { takeEvery } from 'redux-saga/effects';
// import { put } from 'redux-saga/effects';

import { browserHistory } from 'react-router';

import {
  CHANGE_NUMBER_OF_PARKING_PLACES,
} from './constants';

// import * as actions from './actions';

function* changeNumberOfParkingPlaces({ numberOfPlaces }) {
  yield [
    browserHistory.push(`/parking/${numberOfPlaces}`),
  ];
}

function* rootSagas() {
  yield [
    takeEvery(CHANGE_NUMBER_OF_PARKING_PLACES, changeNumberOfParkingPlaces),
  ];
}

export default rootSagas;
