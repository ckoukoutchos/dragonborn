import { put, take, all, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { AUTH } from '../../firebase/firebase';

import { LOGIN, LOGOUT, SIGNUP, UPDATE_DISPLAY_NAME, UPDATE_EMAIL, UPDATE_PASSWORD } from '../auth/authActionTypes';
import { loginSuccess, logoutSuccess, authLoading, signupSuccess, signupFail, loginFail, updateDisplayNameSuccess, updateDisplayNameFail, updateEmailSuccess, updateEmailFail, updatePasswordSuccess, updatePasswordFail } from './authActionCreators';

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
    takeEvery(SIGNUP, signupSaga),
    takeEvery(UPDATE_DISPLAY_NAME, updateDisplayName),
    takeEvery(UPDATE_EMAIL, updateEmail),
    takeEvery(UPDATE_PASSWORD, updatePassword)
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
}): IterableIterator<any> {
  yield put(authLoading());

  try {
    yield AUTH.signInWithEmailAndPassword(email, password);

  } catch (error) {
    yield put(loginFail(error.message));
  }
}

/**
 * @name logoutSaga
 * @description logs user out of firebase
 */
function* logoutSaga(): IterableIterator<any> {
  try {
    yield AUTH.signOut();

  } catch (error) {
    // TODO: add error handling
    console.log(error);
  }
}

/**
 * @name signupSaga
 * @description signs up user in firebase
 */
function* signupSaga({ email, password }: { email: string, password: string }): IterableIterator<any> {
  yield put(authLoading());

  try {
    yield AUTH.createUserWithEmailAndPassword(email, password);
    yield put(signupSuccess());

  } catch (error) {
    yield put(signupFail(error.message));
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
function* updateAuth(): IterableIterator<any> {
  // create listener to firebase auth
  const userChannel = authStateChangeChannel();

  while (true) {
    // emits {user} each time user's auth state changes
    const user = yield take(userChannel);

    // if not logged in
    if (user === 'null') {
      yield put(logoutSuccess(null));
    } else {
      // if logged in
      const formattedUser = {
        displayName: user.displayName,
        email: user.email,
        uid: user.uid
      };

      yield put(loginSuccess(formattedUser));
    }
  }
}

/**
 * @name updateDisplayName
 * @description updates the display name of current user in firebase
 * @param displayName 
 */
function* updateDisplayName({ displayName }: { displayName: string }): IterableIterator<any> {
  yield put(authLoading());

  try {
    // get current signed in user
    const user = yield AUTH.currentUser;

    // check if there is a valid user
    if (user != null) {
      yield user.updateProfile({ displayName });
      yield put(updateDisplayNameSuccess());
    }

  } catch (error) {
    yield put(updateDisplayNameFail(error));
  }
}

/**
 * @name updateEmail
 * @description updates the email of current user in firebase
 * @param email 
 */
function* updateEmail({ email }: { email: string }): IterableIterator<any> {
  yield put(authLoading());

  try {
    // get current signed in user
    const user = yield AUTH.currentUser;

    // check if there is a valid user
    if (user != null) {
      yield user.updateEmail(email);
      yield put(updateEmailSuccess());
    }

  } catch (error) {
    yield put(updateEmailFail(error));
  }
}

/**
 * @name updatePassword
 * @description updates the password of current user in firebase
 * @param password 
 */
function* updatePassword({ password }: { password: string }): IterableIterator<any> {
  yield put(authLoading());

  try {
    // get current signed in user
    const user = yield AUTH.currentUser;

    // check if there is a valid user
    if (user != null) {
      yield user.updatePassword(password);
      yield put(updatePasswordSuccess());
    }

  } catch (error) {
    yield put(updatePasswordFail(error));
  }
}