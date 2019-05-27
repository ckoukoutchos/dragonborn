import { combineReducers } from 'redux';

import authReducer from './auth/authReducer';
import heroReducer from './hero/heroReducer';
import sessionReducer from './session/session';

/*
 * Root reducer combinator
 */
const rootReducer = combineReducers({
  auth: authReducer,
  hero: heroReducer,
  session: sessionReducer
});

// TS infers state shape using return type
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
