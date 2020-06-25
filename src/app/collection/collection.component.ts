import { Component, OnInit } from "@angular/core";
import { CollectionService } from "./collection.service";
import { Store } from "@ngrx/store";

import {
  GetFilters,
  SetItemChecked,
  GetMinMaxPricesAction,
} from "./collection.action";
import { collectionFilters } from "./collection.filters";

@Component({
  selector: "app-collection",
  templateUrl: "./collection.component.html",
  styleUrls: ["./collection.component.scss"],
})
export class CollectionComponent implements OnInit {
  private products;
  private filters;
  private minMaxPrices;

  constructor(
    private collectionService: CollectionService,
    private store: Store<any>
  ) {
    this.filters = collectionFilters;
  }

  ngOnInit() {
    this.filterProducts();
    this.getMinMaxPrices();
  }

  private getMinMaxPrices = () => {
    this.store.dispatch(new GetMinMaxPricesAction());
    const minMaxPricesSelector = (state) => {
      return state.product.minMaxPrices;
    };

    let minMaxPrices$ = this.store.select(minMaxPricesSelector);

    minMaxPrices$.subscribe((minMaxPrices) => {
      console.log("minMaxPrices", minMaxPrices);
      this.minMaxPrices = minMaxPrices;
    });
  };

  private handleCategoryChange = (categoryName, categoryItem) => {
    this.setCategoryItemChecked(categoryName, categoryItem);
    console.log("filters", this.filters);
    this.filterProducts();
  };

  private handlePriceChange = (changeValue) => {
    console.log("changeValue", changeValue);
    this.filters.priceFilter.filterPrice.minPrice = changeValue;
    this.filters.priceFilter.filterPrice.maxPrice = this.minMaxPrices.maxPrice;
    console.log(
      "this.filters.priceFilter.filterPrice",
      this.filters.priceFilter.filterPrice
    );
    this.filterProducts();
  };

  private filterProducts = () => {
    this.collectionService
      .filterProducts(this.filters)
      .subscribe((products) => {
        this.products = products;
      });
  };

  private setCategoryItemChecked = (categoryName, categoryItem) => {
    const { category } = this.filters.categories;
    const targetCategory = category.find((cat) => cat.name === categoryName);
    const targetItem = targetCategory.items.find(
      (item) => item.name === categoryItem.name
    );
    targetItem.checked = !targetItem.checked;
  };
}
