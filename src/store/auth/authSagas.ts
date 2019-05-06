import { put } from 'redux-saga/effects';

import { loginSuccess } from './authActionCreators';

export function* loginSaga() {
  try {
    yield put(loginSuccess());
  } catch (error) {
    // TODO: add error handling
    console.log(error);
  }
}
