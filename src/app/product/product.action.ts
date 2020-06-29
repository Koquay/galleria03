import { Action } from "@ngrx/store";

export enum ProductsActionTypes {
  ADD_PRODUCTS = "ADD_PRODUCTS",
  ADD_MINMAX_PRICES = "ADD_MINMAX_PRICES",
  GET_MINMAX_PRICES = "GET_MINMAX_PRICES",
  GET_PRODUCT = "GET_PRODUCT",
  GET_RELATED_PRODUCTS = "GET_RELATED_PRODUCTS",
}

export class AddProductAction implements Action {
  readonly type = ProductsActionTypes.ADD_PRODUCTS;

  constructor(public products) {}
}

export class GetProductAction implements Action {
  readonly type = ProductsActionTypes.GET_PRODUCT;

  constructor(public productId) {}
}

export class GetRelatedProductsAction implements Action {
  readonly type = ProductsActionTypes.GET_RELATED_PRODUCTS;

  constructor() {}
}

export class AddMinMaxPricesAction implements Action {
  readonly type = ProductsActionTypes.ADD_MINMAX_PRICES;

  constructor(public products) {}
}

export class GetMinMaxPricesAction implements Action {
  readonly type = ProductsActionTypes.GET_MINMAX_PRICES;

  constructor() {}
}

export type ProductsActionUnion =
  | AddProductAction
  | AddMinMaxPricesAction
  | GetMinMaxPricesAction
  | GetProductAction
  | GetRelatedProductsAction;
