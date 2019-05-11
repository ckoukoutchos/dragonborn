import { put, take, all, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { AUTH } from '../../firebase/firebase';

import { LOGIN, LOGOUT } from '../auth/authActionTypes';
import { loginSuccess, logoutSuccess } from './authActionCreators';

/**
 * @name
 * @description
 */
export default function* watchAuth() {
  yield all([
    updateAuth(),
    takeEvery(LOGIN, loginSaga),
    takeEvery(LOGOUT, logoutSaga)
  ])
}

/**
 * @name
 * @description
 */
function* loginSaga({
  email,
  password
}: {
  email: string;
  password: string;
}): IterableIterator<{}> {
  try {
    const user = yield AUTH.signInWithEmailAndPassword(email, password);
  } catch (error) {
    // TODO: add error handling
    console.log(error);
  }
}

/**
 * @name
 * @description
 */
function* logoutSaga(): IterableIterator<{}> {
  try {
    const res = yield AUTH.signOut();
  } catch (error) {
    // TODO: add error handling
    console.log(error);
  }
}

/**
 * @name
 * @description
 */
const authStateChangeChannel = () => {
  return eventChannel((emit: any) => {
    AUTH.onAuthStateChanged(user =>
      emit(user || 'null'));
    return () => console.log('unsub');
  });
};

/**
 * @name
 * @description
 */
function* updateAuth(): IterableIterator<{}> {
  const userChannel = authStateChangeChannel();
  while (true) {
    const user = yield take(userChannel);
    if (user === 'null') {
      yield put(logoutSuccess(null));
    } else {
      const formattedUser = {
        displayName: user.displayName,
        email: user.email,
        uid: user.uid
      };
      yield put(loginSuccess(formattedUser));
    }
  }
}