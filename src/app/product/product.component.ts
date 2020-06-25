import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { GetProductAction } from "./product.action";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  constructor(
    private store: Store<any>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getSelectedProduct();
  }

  private getSelectedProduct = () => {
    const productId = this.activatedRoute.snapshot.paramMap.get("productId");

    this.store.dispatch(new GetProductAction(productId));
    console.log("productId", productId);
  };
}
