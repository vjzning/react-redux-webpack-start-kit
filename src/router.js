import React from 'react';
import {Route, IndexRoute} from 'react-router';
import  {
  App,
  Home,
  About
} from './containers';
export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="info" component={About}/>
    </Route>
  );
}