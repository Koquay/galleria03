import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { CartService } from './cart.service';

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  private cart;

  constructor(private store: Store<any>, private cartService:CartService) {}

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

  private deleteItem = (productId, size) => {
    console.log("remove productId, size", productId, size);

    this.cartService.removeItem(productId, size).subscribe(() => {
      this.getCart();
    })    
  };

  private getSubtotal = () => {
    let subtotal = this.cart.products.reduce((acc, product) => {
      return (acc += product.product.price * (product.quantity || 1));
    }, 0);

    console.log("subtotal", subtotal);
    return subtotal;
  };

  private getTotal = () => {
    return this.getSubtotal() + this.getTax();
  };

  private getTax = () => {
    return 0.05 * this.getSubtotal();
  };

  private clearCart = () => {
    console.log('clearing cart')
  }
}
