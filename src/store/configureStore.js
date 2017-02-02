import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';

import apiMiddleware from '../middleware/apiMiddleware';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

export default function configureStore(api, history, initialState) {
  const logger = createLogger(); // <-- remove in production
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    apiMiddleware(api),
    logger,
    sagaMiddleware,
  ];
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

  const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      // eslint-disable-next-line global-require
      store.replaceReducer(require('../reducers').default);
    });
    module.hot.accept('../sagas', () => {
      // eslint-disable-next-line global-require
      const newRootSaga = require('../sagas').default;
      sagaMiddleware.run(() => newRootSaga(history));
    });
  }

  sagaMiddleware.run(() => rootSaga(history));

  return store;
}
