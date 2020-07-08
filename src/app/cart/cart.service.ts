import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { CartAction } from "./cart.actions";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private baseUrl = "/api/cart/1/";

  constructor(private httpClient: HttpClient, private store: Store<any>) {}

  public addToCart = (payload) => {
    return this.httpClient.put(this.baseUrl, payload).pipe(
      tap((cart) => {
        console.log("cart", cart);
        this.store.dispatch(new CartAction(cart));
      })
    );
  };

  public removeItem = (productId, size) => {
    const payload = {
      params: {productId, size}
    };

    return this.httpClient.delete(this.baseUrl, payload).pipe(
      tap(cart => {
        console.log('cart', cart);
        this.store.dispatch(new CartAction(cart));
      })
    )
  }
}
