import * as actionTypes from "./actionTypes";

export function loadUser(isUserLoggedIn: boolean) {
  return {
    type: actionTypes.LOAD_USER,
    payload: {
      isUserLoggedIn: isUserLoggedIn,
    },
  };
}
