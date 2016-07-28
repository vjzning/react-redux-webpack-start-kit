import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import getRouters from './router';
import createStore from './redux/create';
import ApiClient from './helpers/ApiClient';
const client = new ApiClient();
const store = createStore(client);
const component = (
  <Router routes={getRouters(store)} history={hashHistory}/>
);
const DevTools = require('./DevTools');
ReactDOM.render(
  <Provider key="provider" store={store}>
    <div>
      {component}
      {DevTools}
    </div>
  </Provider>, 
  document.getElementById('root')
);