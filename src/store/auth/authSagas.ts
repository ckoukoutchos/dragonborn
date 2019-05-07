import { put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { AUTH } from '../../firebase/firebase';

import { loginSuccess } from './authActionCreators';

export function* loginSaga({
  email,
  password
}: {
  email: string;
  password: string;
}) {
  try {
    const { user } = yield AUTH.signInWithEmailAndPassword(email, password);
    yield put(loginSuccess(user));
  } catch (error) {
    // TODO: add error handling
    console.log(error);
  }
}