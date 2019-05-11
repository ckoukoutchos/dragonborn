import { AuthState, AuthActionTypes, LOGIN_SUCCESS, LOGOUT_SUCCESS, AUTH_UPDATE } from './authActionTypes';

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
    case AUTH_UPDATE:
      console.log(action.user);
      return { ...state, user: action.user };
    case LOGIN_SUCCESS:
      return { ...state, user: action.user };
    case LOGOUT_SUCCESS:
      console.log('logout');
      return { ...state, user: null };
    default:
      return state;
  }
};

export default authReducer;
