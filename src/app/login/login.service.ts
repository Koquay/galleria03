import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { LoginAction } from "./login.action";
import { CartAction } from "../cart/cart.actions";
import cookie from "js-cookie";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private baseUrl = "/api/login/";

  constructor(
    private httpClient: HttpClient,
    private store: Store<any>,
    private router: Router
  ) {}

  public login = (payload) => {
    return this.httpClient.post<{ token; cart }>(this.baseUrl, payload).pipe(
      tap(({ token, cart }) => {
        console.log("user.token", token);
        console.log("user.cart", cart);
        this.store.dispatch(new LoginAction());
        this.store.dispatch(new CartAction(cart));
        cookie.set("token", token);
        this.router.navigate(["/home"]);
      })
    );
  };
}
