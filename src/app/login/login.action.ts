import { Action } from "@ngrx/store";

export enum LoginActionTypes {
  LOG_IN = "LOG_IN",
  LOG_OUT = "LOG_OUT",
  IS_LOGGED_IN = "IS_LOGGED_IN",
}

export class LoginAction implements Action {
  readonly type = LoginActionTypes.LOG_IN;
  constructor() {}
}

export class LogoutAction implements Action {
  readonly type = LoginActionTypes.LOG_OUT;
  constructor() {}
}

export class IsLoggedInAction implements Action {
  readonly type = LoginActionTypes.IS_LOGGED_IN;
  constructor() {}
}

export type LoginActionUnion = LoginAction | LogoutAction | IsLoggedInAction;
