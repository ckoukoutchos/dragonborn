import { put, take, all, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { AUTH } from '../../firebase/firebase';

import { LOGIN } from '../auth/authActionTypes';
import { loginSuccess } from './authActionCreators';

// TODO: function docs, comments

export default function* watchAuth() {
  yield all([
    takeEvery(LOGIN, loginSaga)
  ])
}

function* loginSaga({
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

const createEventChannel = () => {
  return eventChannel(
    (emitter: any) => {
      AUTH.onAuthStateChanged(user => emitter(user));
      return () => emitter('END');
    }
  )
}

function* updateAuth() {
  const updateAuth = createEventChannel();
  while (true) {
    const user = yield take(updateAuth);
    yield put({ type: 'None' })
  }
}