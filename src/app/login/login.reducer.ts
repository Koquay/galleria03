import { LoginActionTypes, LoginActionUnion } from "./login.action";

export const LoginReducer = (
  state = initialState,
  action: LoginActionUnion
) => {
  switch (action.type) {
    case LoginActionTypes.LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
      };

    case LoginActionTypes.IS_LOGGED_IN:
      return {
        ...state,
      };

    case LoginActionTypes.LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

const initialState = {
  isLoggedIn: false,
};
