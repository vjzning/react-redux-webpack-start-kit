import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import getRouters from './router';

import createStore from './redux/create';
const component = (
  <Router routes={getRouters()} history={hashHistory}/>
);
const DevTools = require('./DevTools');
ReactDOM.render(
  <Provider key="provider" store={createStore()}>
    <div>
      {component}
      {DevTools}
    </div>
  </Provider>, 
  document.getElementById('root')
);