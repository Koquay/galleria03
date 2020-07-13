import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AddInfoAction } from "../message/message/message.action";

@Injectable({
  providedIn: "root",
})
export class AuthenticationGuard implements CanActivate {
  private isLoggedIn = false;

  constructor(private store: Store<any>, private router: Router) {}

  canActivate() {
    this.isUserLoggedIn();

    if (!this.isLoggedIn) {
      this.store.dispatch(new AddInfoAction("Please log in to proceed."));
      this.router.navigate(["/"]);
    }

    return this.isLoggedIn;
  }

  private isUserLoggedIn = () => {
    const loggedInSelector = (state) => {
      return state.login;
    };

    let loggedIn$ = this.store.select(loggedInSelector);

    loggedIn$.subscribe((login) => {
      this.isLoggedIn = login.isLoggedIn;
      return this.isLoggedIn;
    });
  };
}
