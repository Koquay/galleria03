import { Action } from "@ngrx/store";

export enum CartActionTypes {
  SET_CART = "SET_CART",
}

export class CartAction implements Action {
  readonly type = CartActionTypes.SET_CART;
  constructor(public cart) {}
}

export type CartActionUnion = CartAction;
