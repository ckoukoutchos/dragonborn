import { combineReducers } from 'redux';

import heroReducer from './hero/heroReducer';

export default combineReducers({
  hero: heroReducer
});
