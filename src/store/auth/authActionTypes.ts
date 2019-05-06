/*
 * Auth action constants
 */
export const LOGIN = 'LOGIN';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGOUT = 'LOGOUT';

export const SIGNUP = 'SIGNUP';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

/*
 * Auth action type interfaces
 */
export interface AuthState {
  authUser: null | any;
}

interface LoginAction {
  type: typeof LOGIN;
}

interface LoginFailAction {
  type: typeof LOGIN_FAIL;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface SignupAction {
  type: typeof SIGNUP;
}

interface SignupFailAction {
  type: typeof SIGNUP_FAIL;
}

interface SignupSuccessAction {
  type: typeof SIGNUP_SUCCESS;
}

export type AuthActionTypes =
  | LoginAction
  | LoginFailAction
  | LoginSuccessAction
  | LogoutAction
  | SignupAction
  | SignupFailAction
  | SignupSuccessAction;
