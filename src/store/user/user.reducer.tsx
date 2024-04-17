import { UnknownAction } from "redux";
import { USER_ACTION_TYPES } from "./user.types";
import { UserData } from "../../utils/firebase/firebase.utils";
import {
  signInSuccess,
  signUpFailed,
  signInFailed,
  signOutFailed,
  signOutSuccess,
} from "./user.action";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

//Setting initial state
const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

//Setting up Reducer
export const userReducer = (state = INITIAL_STATE, action: UnknownAction) => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }
  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
    };
  }
  if (
    signUpFailed.match(action) ||
    signInFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
    };
  }
  return state;
};
