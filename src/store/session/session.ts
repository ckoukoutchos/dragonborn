import { updateObject } from "../../shared/immutable";

/*
 * Session action constants
 */
export const HTTP_ERROR = 'HTTP_ERROR';
export const HTTP_ERROR_RESET = 'HTTP_ERROR_RESET';

/*
 * Session action type interfaces
 */
interface HttpError {
  type: typeof HTTP_ERROR;
}

interface HttpErrorReset {
  type: typeof HTTP_ERROR_RESET;
}

export type SessionActionTypes = HttpError | HttpErrorReset;

export interface SessionState {
  httpError: boolean;
}

/*
 * Session action creators
 */
export const httpError = (): SessionActionTypes => ({ type: HTTP_ERROR });

export const httpErrorReset = (): SessionActionTypes => ({ type: HTTP_ERROR_RESET });

/*
 * Inital Session state
 */
const initalState: SessionState = {
  httpError: false
}

/**
 * @name sessionReducer
 * @description reducer for session slice of state
 * @param state
 * @param action
 */
const sessionReducer = (state: SessionState = initalState, action: SessionActionTypes): SessionState => {
  switch (action.type) {
    case HTTP_ERROR:
      return httpErrorSet(state);
    case HTTP_ERROR_RESET:
      return httpErrorRes(state);
    default:
      return state;
  }
}

/*
 * reducer case functions
 */
const httpErrorSet = (state: SessionState): SessionState => updateObject(state, { httpError: true });

const httpErrorRes = (state: SessionState): SessionState => updateObject(state, { httpError: false });

export default sessionReducer;