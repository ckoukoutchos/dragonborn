import { put, take, all, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { AUTH } from '../../firebase/firebase';

import { LOGIN, LOGOUT, SIGNUP } from '../auth/authActionTypes';
import { loginSuccess, logoutSuccess, authLoading, signupSuccess } from './authActionCreators';

// TODO: error handling

/**
 * @name watchAuth
 * @description combinator for auth sagas
 */
export default function* watchAuth() {
  yield all([
    updateAuth(),
    takeEvery(LOGIN, loginSaga),
    takeEvery(LOGOUT, logoutSaga),
    // ts bug with takeEvery defaulting to wrong type
    //@ts-ignore
    takeEvery(SIGNUP, signupSaga)
  ]);
}

/**
 * @name loginSaga
 * @description logs user into firebase
 * @param email user email address
 * @param password user password
 */
function* loginSaga({
  email,
  password
}: {
  email: string;
  password: string;
}): IterableIterator<{}> {
  yield put(authLoading());

  try {
    const user = yield AUTH.signInWithEmailAndPassword(email, password);
  } catch (error) {
    // TODO: add error handling
    console.log(error);
  }
}

/**
 * @name logoutSaga
 * @description logs user out of firebase
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
 * @name signupSaga
 * @description signs up user in firebase
 */
function* signupSaga({ email, password }: { email: string, password: string }): IterableIterator<{}> {
  yield put(authLoading());

  try {
    const res = yield AUTH.createUserWithEmailAndPassword(email, password);

    yield put(signupSuccess());
  } catch (error) {
    // TODO: add error handling
    console.log(error);
  }
}

/**
 * @name authStateChangeChannel
 * @description creates a listener for firebase auth updates
 */
const authStateChangeChannel = () => {
  return eventChannel((emit: any) => {
    AUTH.onAuthStateChanged(user =>
      emit(user || 'null'));
    return () => console.log('unsub');
  });
};

/**
 * @name updateAuth
 * @description updates the auth state of a user when firebase registers a change
 */
function* updateAuth(): IterableIterator<{}> {
  // create listener to firebase auth
  const userChannel = authStateChangeChannel();

  while (true) {
    // emits {user} each time user's auth state changes
    const user = yield take(userChannel);

    // if not logged in
    if (user === 'null') {
      yield put(logoutSuccess(null));

      // if logged in
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