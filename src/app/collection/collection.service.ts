import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";
import { Store } from "@ngrx/store";
import {
  AddProductAction,
  AddMinMaxPricesAction,
} from "../product/product.action";
import {
  ClearMessageAction,
  AddErrorAction,
} from "../shared/message/message/message.action";

@Injectable({
  providedIn: "root",
})
export class CollectionService {
  private url = "/api/collection";

  constructor(private httpClient: HttpClient, private store: Store<any>) {}

  public filterProducts = (filters) => {
    const url = `/api/collection`;
    const queryParams = this.createQueryParams(filters);

    this.store.dispatch(new ClearMessageAction());

    return this.httpClient.get(`${url}${queryParams}`).pipe(
      tap((products) => {
        this.store.dispatch(new AddProductAction(products));
        this.store.dispatch(new AddMinMaxPricesAction(products));
      }),
      catchError((error) => {
        this.store.dispatch(new AddErrorAction(error.error));
        throw error;
      })
    );
  };

  private createQueryParams = (filters) => {
    const { category } = filters.categories;
    const { filterPrice } = filters.priceFilter;

    let categoryFilters = [];
    let tmpCategoryFilters = [];

    for (let cat of category) {
      const filterItems = cat.items.filter((item) => item.checked === true);
      if (filterItems.length) {
        tmpCategoryFilters = tmpCategoryFilters.concat(filterItems);
      }
    }

    // tmpCategoryFilters = tmpCategoryFilters.flat();

    for (let filter of tmpCategoryFilters) {
      categoryFilters.push(filter.name);
    }

    const dataFilters = JSON.stringify({
      categoryFilters: categoryFilters,
      filterPrice: filterPrice,
    });

    const queryParams = `?filters=${dataFilters}`;

    return queryParams;
  };
}
