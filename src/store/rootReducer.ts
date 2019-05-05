import { combineReducers } from 'redux';

import heroReducer from './hero/heroReducer';

/*
 * Root reducer combinator
 */
const rootReducer = combineReducers({
  hero: heroReducer
});

/*
 * TS infers state shape using return type
 */
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
