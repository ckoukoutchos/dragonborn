import { AuthState, AuthActionTypes, LOGIN_SUCCESS, LOGOUT_SUCCESS, AUTH_LOADING, SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_FAIL } from './authActionTypes';
import { User } from '../../models/User';
import { updateObject } from '../../shared/immutable';

/*
 * Inital Auth state
 */
const initialState: AuthState = {
  error: null,
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
    case LOGIN_FAIL:
      return loginFail(state, action);
    case LOGIN_SUCCESS:
      return loginSuccess(state, action);
    case LOGOUT_SUCCESS:
      return logoutSuccess(state, action);
    case SIGNUP_FAIL:
      return signupFail(state, action);
    case SIGNUP_SUCCESS:
      return signupSuccess(state);
    default:
      return state;
  }
};

/*
 * reducer case functions
 */
const authLoading = (state: AuthState): AuthState => updateObject(state, { loading: true });

const loginFail = (state: AuthState, { error }: { error: string }): AuthState => updateObject(state, { loading: false, error });

const loginSuccess = (state: AuthState, { user }: { user: User }): AuthState => updateObject(state, { user, loading: false, error: null });

const logoutSuccess = (state: AuthState, { user }: { user: null }): AuthState => updateObject(state, { user, loading: false, error: null });

const signupFail = (state: AuthState, { error }: { error: string }): AuthState => updateObject(state, { loading: false, error });

const signupSuccess = (state: AuthState): AuthState => updateObject(state, { loading: false, error: null });

export default authReducer;
