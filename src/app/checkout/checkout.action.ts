import { Action } from "@ngrx/store";

export enum CheckoutActionTypes {
    GET_CHECKOUT_DATA = "GET_CHECKOUT_DATA",

}

export class CheckoutAction implements Action {
  readonly type = CheckoutActionTypes.GET_CHECKOUT_DATA;
  constructor() {}
}

export type CheckoutActionUnion = CheckoutAction;
