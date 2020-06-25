import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AddProductAction, AddMinMaxPricesAction } from "./collection.action";

@Injectable({
  providedIn: "root",
})
export class CollectionService {
  private url = "/api/collection";

  constructor(private httpClient: HttpClient, private store: Store<any>) {}

  public getCollection = (filters) => {
    return this.httpClient.get(this.url).pipe(
      tap((products) => {
        console.log("products", products);
        this.store.dispatch(new AddProductAction(products));
        this.store.dispatch(new AddMinMaxPricesAction(products));
      })
    );
  };

  public filterProducts = (filters) => {
    const url = `/api/collection`;
    const queryParams = this.createQueryParams(filters);

    return this.httpClient.get(`${url}${queryParams}`).pipe(
      tap((products) => {
        console.log("products", products);
        this.store.dispatch(new AddProductAction(products));
        this.store.dispatch(new AddMinMaxPricesAction(products));
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

    console.log("tmpCategoryFilters", tmpCategoryFilters);

    // tmpCategoryFilters = tmpCategoryFilters.flat();

    for (let filter of tmpCategoryFilters) {
      categoryFilters.push(filter.name);
    }

    console.log("filterPrice", filterPrice);
    console.log("categoryFilters", categoryFilters);

    const dataFilters = JSON.stringify({
      categoryFilters: categoryFilters,
      filterPrice: filterPrice,
    });

    const queryParams = `?filters=${dataFilters}`;
    console.log("queryParams", queryParams);
    return queryParams;
  };
}
