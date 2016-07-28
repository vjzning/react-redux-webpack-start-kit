import {createStore as _createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
export default function createStore(data = {}) {
  let finalCreateStore;
  const { persistState } = require('redux-devtools');
  const DevTools = require('../DevTools');
  finalCreateStore = compose(
    applyMiddleware(logger()),
    window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(_createStore);

  const reducer = require('./modules/reducer');
  const store = finalCreateStore(reducer, data);


  if (module.hot) {
    module.hot.accept('./modules/reducer', () => {
      store.replaceReducer(require('./modules/reducer').default);
    });
  }
  return store;
}