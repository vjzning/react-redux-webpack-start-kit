import {combineReducers} from 'redux';

import  info from './info';
const  comb =  combineReducers({
    info
});
console.log(typeof comb);
export  default  comb;