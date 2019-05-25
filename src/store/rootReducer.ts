import { combineReducers } from 'redux';

import heroReducer from './hero/heroReducer';
import authReducer from './auth/authReducer';

/*
 * Root reducer combinator
 */
const rootReducer = combineReducers({
  hero: heroReducer,
  auth: authReducer
});

// TS infers state shape using return type
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
