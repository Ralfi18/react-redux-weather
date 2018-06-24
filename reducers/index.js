import { combineReducers } from 'redux';
import WetherReucer from './reducer_wether';

const rootReducer = combineReducers({
  weather: WetherReucer
})

export default rootReducer;