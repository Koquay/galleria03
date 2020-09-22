import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { tap, catchError } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { LoginAction, LogoutAction } from "./login.action";
import { CartAction } from "../cart/cart.actions";
import cookie from "js-cookie";
import {
  AddErrorAction,
  ClearMessageAction,
} from "../shared/message/message/message.action";
import { timer } from "rxjs/internal/observable/timer";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private baseUrl = "/api/login/";
  private loginTimer = timer(3600000);
  private loginSubscriber;
  private inOneHour = new Date(new Date().getTime() + 60 * 60 * 1000);

  constructor(
    private httpClient: HttpClient,
    private store: Store<any>,
    private router: Router
  ) {}

  public login = (payload) => {
    this.store.dispatch(new ClearMessageAction());
    return this.httpClient.post<{ token; cart }>(this.baseUrl, payload).pipe(
      tap(({ token, cart }) => {
        this.store.dispatch(new LoginAction());
        this.store.dispatch(new CartAction(cart));
        this.initLoginExpireTimer(token);
        this.router.navigate(["/home"]);
      }),
      catchError((error) => {
        this.store.dispatch(new AddErrorAction(error.error));
        throw error;
      })
    );
  };

  public logout = () => {
    this.store.dispatch(new LogoutAction());
    cookie.remove("token");
    this.router.navigate(["/"]);
  };

  private initLoginExpireTimer = (token) => {
    cookie.set("token", token, {
      expires: this.inOneHour,
    });

    this.loginSubscriber = this.loginTimer.subscribe(() => {
      this.loginSubscriber.unsubscribe();
      this.logout();
    });
  };
}
