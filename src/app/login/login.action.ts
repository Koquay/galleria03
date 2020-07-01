import { Action } from "@ngrx/store";

export enum LoginActionTypes {
  LOGGED_IN = "LOGGED_IN",
  LOGGED_OUT = "LOGGED_OUT",
}

export class LoginAction implements Action {
  readonly type = LoginActionTypes.LOGGED_IN;
  constructor() {}
}

export class LogoutAction implements Action {
  readonly type = LoginActionTypes.LOGGED_OUT;
  constructor() {}
}

export type LoginActionUnion = LoginAction;
