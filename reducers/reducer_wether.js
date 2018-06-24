import { FETCH_WETHER } from '../actions';

export default function (state = [], action) {
  switch(action.type) {
    case FETCH_WETHER:
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state];
     default: 
  }
  return state;
} 