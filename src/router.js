import React from 'react';
import {load as loadAuth, isloaded} from 'redux/modules/auth';
import {Route, IndexRoute} from 'react-router';
import  {
  App,
  Home,
  About,
  Login
} from './containers';
export default (store) => {
  const requireEnter = (nextState, replace, cb) => {
    console.log(store.getState());
    if (!isloaded(store.getState())) {
      store.dispatch(loadAuth()).then(()=> {
        cb();
      }).catch(() => {
        replace('/login')
        return cb();
      });
    }
    //store.dispatch(loadAuth())
    //cb();
  };
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about"  onEnter={requireEnter} component={About}/>
      <Route path="info" component={About}/>
      <Route path='login' component={Login}/>
    </Route>
  );
}