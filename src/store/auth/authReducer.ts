import { AuthState, AuthActionTypes, LOGIN_SUCCESS, LOGOUT_SUCCESS, AUTH_LOADING } from './authActionTypes';
import { User } from '../../models/User';
import { updateObject } from '../../shared/Utility';

/*
 * Inital Auth state
 */
const initialState: AuthState = {
  loading: false,
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
    case AUTH_LOADING:
      return authLoading(state);
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
const authLoading = (state: AuthState): AuthState => updateObject(state, { loading: true });

const loginSuccess = (state: AuthState, { user }: { user: User }): AuthState => updateObject(state, { user, loading: false });

const logoutSuccess = (state: AuthState, { user }: { user: null }): AuthState => updateObject(state, { user, loading: false });

export default authReducer;
