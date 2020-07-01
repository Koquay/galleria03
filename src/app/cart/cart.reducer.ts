import { CartActionUnion, CartAction, CartActionTypes } from "./cart.actions";
import { defaultStateFn } from "@ngrx/store";

export const CartReducer = (state = initialState, action: CartActionUnion) => {
  console.log("CART ACTION TYPE", action.type);
  switch (action.type) {
    case CartActionTypes.SET_CART:
      return {
        ...state,
        cart: action.cart,
      };

    default:
      return state;
  }
};

const initialState = {
  cart: {},
};
