import {combineReducers} from 'redux';
import {reducer as reducerAsyncConnect} from 'redux-async-connect';
import  info from './info';
import auth from './auth';
const  comb =  combineReducers({
    reducerAsyncConnect,
    auth,
    info
});
console.log(typeof comb);
export  default  comb;