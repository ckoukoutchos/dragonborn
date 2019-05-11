import { put, take } from 'redux-saga/effects';
import { eventChannel, Subscribe } from 'redux-saga';
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
    yield put(loginSuccess(user))
  }
}