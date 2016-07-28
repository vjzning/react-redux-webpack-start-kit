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