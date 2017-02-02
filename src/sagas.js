import { fork } from 'redux-saga/effects';

import parking from './containers/Parking/sagas';

function* rootSagas() {
  yield [
    fork(parking),
  ];
}

export default rootSagas;
