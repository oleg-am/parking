import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import parking from './containers/Parking/reducer';

const rootReducer = combineReducers({
  routing,
  parking,
});

export default rootReducer;
