import { Action } from "@ngrx/store";

export enum ProductsActionTypes {
  ADD_PRODUCTS = "ADD_PRODUCTS",
  ADD_MINMAX_PRICES = "ADD_MINMAX_PRICES",
  GET_MINMAX_PRICES = "GET_MINMAX_PRICES",
}

export enum CollectionActionTypes {
  GET_FILTERS = "GET_FILTERS",
  SET_ITEM_CHECKED = "SET_ITEM_CHECKED",
}

export class AddProductAction implements Action {
  readonly type = ProductsActionTypes.ADD_PRODUCTS;

  constructor(public products) {}
}

export class AddMinMaxPricesAction implements Action {
  readonly type = ProductsActionTypes.ADD_MINMAX_PRICES;

  constructor(public products) {}
}

export class GetMinMaxPricesAction implements Action {
  readonly type = ProductsActionTypes.GET_MINMAX_PRICES;

  constructor() {}
}

export class GetFilters implements Action {
  readonly type = CollectionActionTypes.GET_FILTERS;

  constructor() {}
}

export class SetItemChecked implements Action {
  readonly type = CollectionActionTypes.SET_ITEM_CHECKED;

  constructor(public category, public item) {}
}

export type ProductsActionUnion =
  | AddProductAction
  | AddMinMaxPricesAction
  | GetMinMaxPricesAction;
export type CollectionActionUnion = GetFilters | SetItemChecked;
