import { AuthState, AuthActionTypes, LOGIN_SUCCESS, LOGOUT_SUCCESS, AUTH_LOADING, SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_FAIL, UPDATE_DISPLAY_NAME, UPDATE_DISPLAY_NAME_SUCCESS, UPDATE_EMAIL_FAIL, UPDATE_DISPLAY_NAME_FAIL, UPDATE_EMAIL_SUCCESS, UPDATE_PASSWORD_FAIL, UPDATE_PASSWORD_SUCCESS, DELETE_USER_FAIL, DELETE_USER_SUCCESS } from './authActionTypes';
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
    case AUTH_LOADING: return authLoading(state);
    case DELETE_USER_FAIL: return deleteUserFail(state, action);
    case DELETE_USER_SUCCESS: return deleteUserSuccess(state);
    case LOGIN_FAIL: return loginFail(state, action);
    case LOGIN_SUCCESS: return loginSuccess(state, action);
    case LOGOUT_SUCCESS: return logoutSuccess(state, action);
    case SIGNUP_FAIL: return signupFail(state, action);
    case SIGNUP_SUCCESS: return signupSuccess(state);
    case UPDATE_DISPLAY_NAME_FAIL: return updateDisplayNameFail(state, action);
    case UPDATE_DISPLAY_NAME_SUCCESS: return updateDisplayNameSuccess(state);
    case UPDATE_EMAIL_FAIL: return updateEmailFail(state, action);
    case UPDATE_EMAIL_SUCCESS: return updateEmailSuccess(state);
    case UPDATE_PASSWORD_FAIL: return updatePasswordFail(state, action);
    case UPDATE_PASSWORD_SUCCESS: return updatePasswordSuccess(state);
    default: return state;
  }
};

/*
 * reducer case functions
 */
const authLoading = (state: AuthState): AuthState => updateObject(state, { loading: true });

const deleteUserFail = (state: AuthState, { error }: { error: string }): AuthState => updateObject(state, { error, loading: false });

const deleteUserSuccess = (state: AuthState): AuthState => updateObject(state, { loading: false, user: null });

const loginFail = (state: AuthState, { error }: { error: string }): AuthState => updateObject(state, { loading: false, error });

const loginSuccess = (state: AuthState, { user }: { user: User }): AuthState => updateObject(state, { user, loading: false, error: null });

const logoutSuccess = (state: AuthState, { user }: { user: null }): AuthState => updateObject(state, { user, loading: false, error: null });

const signupFail = (state: AuthState, { error }: { error: string }): AuthState => updateObject(state, { loading: false, error });

const signupSuccess = (state: AuthState): AuthState => updateObject(state, { loading: false, error: null });

const updateDisplayNameFail = (state: AuthState, { error }: { error: string }): AuthState => updateObject(state, { error, loading: false });

const updateDisplayNameSuccess = (state: AuthState): AuthState => updateObject(state, { loading: false });

const updateEmailFail = (state: AuthState, { error }: { error: string }): AuthState => updateObject(state, { error, loading: false });

const updateEmailSuccess = (state: AuthState): AuthState => updateObject(state, { loading: false });

const updatePasswordFail = (state: AuthState, { error }: { error: string }): AuthState => updateObject(state, { error, loading: false });

const updatePasswordSuccess = (state: AuthState): AuthState => updateObject(state, { loading: false });

export default authReducer;
