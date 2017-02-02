import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import Parking from 'containers/Parking';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Parking} />
    <Route path="/parking/:numberOfPlaces" component={Parking} />
  </Route>
);
