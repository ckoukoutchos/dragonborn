import { combineReducers } from 'redux';

import heroReducer from './hero/heroReducer';

const rootReducer = combineReducers({
  hero: heroReducer
});

export type AppState = ReturnType<typeof rootReducer>;
