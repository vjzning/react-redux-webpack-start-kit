const LOAD = 'info/LOAD';
const LOAD_SUCCESS = 'info/LOAD_SUCCESS';
const LOAD_FAIL = 'info/LOAD_FAIL';
const initialState = {
  a: 1,
  b: 2
}
export  default function info(state = initialState, action = {}) {
  switch (action.type) {
    case 'load':
      return {
        ...state,
        loading: true,
        a: action.a,
        c: 'c'
      };
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        loaded: false
      }
    default:
      return state;
  }
}
export function load(a) {
  return {
    type: 'load',
    a
  }
}

export function loadServer() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get('')
  }
}