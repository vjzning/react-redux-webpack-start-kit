/**
 * Created by jzning on 16/7/28.
 */
const LOAD = 'auth/LOAD';
const LOAD_SUCCESS = 'auth/LOAD_SUCCESS';
const LOAD_FAIL = 'auth/LOAD_FAIL';
const initState = {
  loaded: false
};
export default function reducer(state = initState, action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      }
    case LOAD_SUCCESS:
      return {
        ...state,
        loaded: true,
      };
    case LOAD_FAIL:
      return {
        ...state,
        loaded: false
      }
    default:
      return {
        ...state
      }
  }
}
export function isloaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}
export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get('/loadAuth')
  }
}
export function login() {
}