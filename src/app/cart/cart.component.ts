import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  private cart;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.getCart();
  }

  private getCart = () => {
    const cartSelector = (state) => {
      return state.cart;
    };
    let cart$ = this.store.select(cartSelector);

    cart$.subscribe((cart) => {
      this.cart = cart.cart;
      console.log("cart", this.cart);
      console.log("products", this.cart.products);
    });
  };

  private removeItem = (productId) => {
    console.log("remove productId", productId);
  };
}
