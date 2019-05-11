import { put, take, all, takeEvery } from 'redux-saga/effects';
import { eventChannel, Subscribe } from 'redux-saga';
import { AUTH } from '../../firebase/firebase';

import { LOGIN, LOGOUT } from '../auth/authActionTypes';
import { loginSuccess, logoutSuccess, authUpdate } from './authActionCreators';

// TODO: function docs, comments

export default function* watchAuth() {
  yield all([
    updateAuth(),
    takeEvery(LOGIN, loginSaga),
    takeEvery(LOGOUT, logoutSaga)
  ])
}

// TODO: func docs, comments

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

function* logoutSaga() {
  try {
    const res = yield AUTH.signOut();
    yield put(logoutSuccess());
  } catch (error) {
    // TODO: add error handling
    console.log(error);
  }
}

const authStateChangeChannel = () => {
  return eventChannel((emit: any) => {
    AUTH.onAuthStateChanged(user =>
      emit(user || 'null'));
    return () => console.log('unsub');
  });
};

function* updateAuth() {
  console.log('updateAuth');
  const userChannel = authStateChangeChannel();
  console.log('userChannel', userChannel);
  while (true) {
    const user = yield take(userChannel);
    if (user === 'null') {
      yield put(authUpdate(null));
    } else {
      yield put(authUpdate(user));
    }
  }
}