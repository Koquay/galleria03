import { Action } from "@ngrx/store";

export enum CollectionActionTypes {
  GET_FILTERS = "GET_FILTERS",
  SET_ITEM_CHECKED = "SET_ITEM_CHECKED",
}

export class GetFilters implements Action {
  readonly type = CollectionActionTypes.GET_FILTERS;

  constructor() {}
}

export class SetItemChecked implements Action {
  readonly type = CollectionActionTypes.SET_ITEM_CHECKED;

  constructor(public category, public item) {}
}

export type CollectionActionUnion = GetFilters | SetItemChecked;
