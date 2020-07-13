import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { CartAction } from "./cart.actions";
import { ClearMessageAction, AddErrorAction } from '../shared/message/message/message.action';

@Injectable({
  providedIn: "root",
})
export class CartService {
  private baseUrl = "/api/cart";

  constructor(private httpClient: HttpClient, private store: Store<any>) {}

  public addToCart = (payload) => {
    this.store.dispatch(new ClearMessageAction());
    
    return this.httpClient.put(`${this.baseUrl}/1`, payload).pipe(
      tap((cart) => {
        console.log("cart", cart);
        this.store.dispatch(new CartAction(cart));
      }),
      catchError(error => {
        console.log("error", error);
        this.store.dispatch(new AddErrorAction(error.error));
        throw error;
      })
    );
  };

  public removeItem = (productId, size) => {
    const payload = {
      params: { productId, size },
    };

    this.store.dispatch(new ClearMessageAction());

    return this.httpClient.delete(`${this.baseUrl}/1`, payload).pipe(
      tap((cart) => {
        console.log("cart", cart);
        this.store.dispatch(new CartAction(cart));
      }),
      catchError(error => {
        console.log("error", error);
        this.store.dispatch(new AddErrorAction(error.error));
        throw error;
      })
    );
  };

  public clearCart = () => {
    this.store.dispatch(new ClearMessageAction());

    return this.httpClient.delete(`${this.baseUrl}/1/2`).pipe(
      tap((cart) => {
        console.log("cart", cart);
        this.store.dispatch(new CartAction(cart));
      }),
      catchError(error => {
        console.log("error", error);
        this.store.dispatch(new AddErrorAction(error.error));
        throw error;
      })
    );
  };
}
