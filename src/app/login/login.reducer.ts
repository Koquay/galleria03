import { LoginActionTypes, LoginActionUnion } from "./login.action";

export const LoginReducer = (
  state = initialState,
  action: LoginActionUnion
) => {
  console.log("ACTION TYPE", action.type);
  switch (action.type) {
    case LoginActionTypes.LOGGED_IN:
      return {
        ...state,
        loggedIn: true,
      };

    // case LoginActionTypes.LOGGED_OUT:
    //   return {
    //     ...state,
    //     loggedIn: false,
    //   };

    default:
      return state;
  }
};

const initialState = {
  loggedIn: false,
};
