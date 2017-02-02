import { createSelector, createStructuredSelector } from 'reselect';

import REDUCER from './constants';

const TRUCK_MULTIPLER = 10 / 30;
const DISABLED_MULTIPLER = 5 / 30;

const numberOfPlaces = state => state[REDUCER].parking.numberOfPlaces;
// const cars = state => state[REDUCER].cars;

const trucks = createSelector(
  numberOfPlaces,
  items => Math.floor(items * TRUCK_MULTIPLER),
);

const disableds = createSelector(
  numberOfPlaces,
  items => Math.floor(items * DISABLED_MULTIPLER),
);

const sedans = createSelector(
  numberOfPlaces,
  trucks,
  disableds,
  (places, truks_, disableds_) => places - truks_ - disableds_,
);

export default createStructuredSelector({
  numberOfPlaces,
  trucks,
  disableds,
  sedans,
});
