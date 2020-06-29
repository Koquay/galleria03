import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { GetProductAction, GetRelatedProductsAction } from "./product.action";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  private product;
  private relatedProducts;
  private currentImage;

  constructor(
    private store: Store<any>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getSelectedProduct();
    this.getRelatedProducts();
  }

  private addToCart = () => {};

  private getSelectedProduct = () => {
    const productId = this.activatedRoute.snapshot.paramMap.get("productId");
    console.log("productId", productId);

    this.store.dispatch(new GetProductAction(productId));

    const productSelector = (state) => {
      return state.product.product;
    };
    let product$ = this.store.select(productSelector);
    product$.subscribe((product) => {
      console.log("product", product);
      this.product = product;
      this.currentImage = product.images[0];
    });
  };

  private getRelatedProducts = () => {
    this.store.dispatch(new GetRelatedProductsAction());

    const productsSelector = (state) => {
      return state.product.relatedProducts;
    };
    let products$ = this.store.select(productsSelector);
    products$.subscribe((products) => {
      this.relatedProducts = products;
      console.log("relatedProducts", this.relatedProducts);
    });
  };

  private setCurrentImage = (image) => {
    this.currentImage = image;
  };
}
