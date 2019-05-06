import { AuthState, AuthActionTypes, LOGIN } from './authActionTypes';

/*
 * Inital Auth state
 */
const initialState: AuthState = {
  authUser: null
};

/**
 * @name authReducer
 * @description reducer for auth slice of state
 * @param state
 * @param action
 */
const authReducer = (
  state: AuthState = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case LOGIN:
      return state;
    default:
      return state;
  }
};

export default authReducer;
