import { AuthState, AuthActionTypes, LOGIN, LOGIN_SUCCESS } from './authActionTypes';

/*
 * Inital Auth state
 */
const initialState: AuthState = {
  user: null
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
    case LOGIN_SUCCESS:
      return { ...state, user: action.user }
    default:
      return state;
  }
};

export default authReducer;
