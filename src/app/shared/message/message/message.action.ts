import { Action } from "@ngrx/store";

export enum MessageActionTypes {
  ADD_INFO_MESSAGE = "ADD_INFO_MESSAGE",
  ADD_ERROR_MESSAGE = "ADD_ERROR_MESSAGE",
  CLEAR_MESSAGES = "CLEAR_MESSAGES",
}

export class AddErrorAction implements Action {
  readonly type = MessageActionTypes.ADD_ERROR_MESSAGE;
  constructor(public message) {}
}

export class AddInfoAction implements Action {
  readonly type = MessageActionTypes.ADD_INFO_MESSAGE;
  constructor(public message) {}
}

export class ClearMessageAction implements Action {
  readonly type = MessageActionTypes.CLEAR_MESSAGES;
  constructor() {}
}

export type MessageActionUnion =
  | AddErrorAction
  | AddInfoAction
  | ClearMessageAction;
