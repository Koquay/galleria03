import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private baseUrl = "/api/cart/1/";

  constructor(private httpClient: HttpClient) {}

  public addToCart = (payload) => {
    return this.httpClient.put(this.baseUrl, payload).pipe(
      tap((cart) => {
        console.log("cart", cart);
      })
    );
  };
}
