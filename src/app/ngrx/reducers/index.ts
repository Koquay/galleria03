import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from "@ngrx/store";
import { HomeReducer } from "src/app/home/home.reducer";
import { FooterReducer } from "src/app/footer/footer.reducer";
import CollectionReducer from "src/app/collection/collection.reducer";
import { ProductReducer } from "src/app/product/product.reducer";
import { LoginReducer } from "src/app/login/login.reducer";
import { CartReducer } from "src/app/cart/cart.reducer";

export interface State {}

export const reducers: ActionReducerMap<State> = {
  home: HomeReducer,
  footer: FooterReducer,
  collection: CollectionReducer,
  product: ProductReducer,
  login: LoginReducer,
  cart: CartReducer,
};
