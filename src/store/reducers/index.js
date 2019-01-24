import { combineReducers } from 'redux';

import heroReducer from './hero';

export default combineReducers({
  hero: heroReducer
});
