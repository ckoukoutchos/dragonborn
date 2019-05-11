import { AuthState, AuthActionTypes, LOGIN_SUCCESS, LOGOUT_SUCCESS } from './authActionTypes';
import { User } from '../../models/User';
import { updateObject } from '../../shared/Utility';

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
      return loginSuccess(state, action);
    case LOGOUT_SUCCESS:
      return logoutSuccess(state, action);
    default:
      return state;
  }
};

/*
 * reducer case functions
 */
const loginSuccess = (state: AuthState, { user }: { user: User }) => updateObject(state, { user });

const logoutSuccess = (state: AuthState, { user }: { user: null }) => updateObject(state, { user });

export default authReducer;
