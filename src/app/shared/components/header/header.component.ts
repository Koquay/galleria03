import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { LogoutAction } from "src/app/login/login.action";
import { LoginService } from "src/app/login/login.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  private isLoggedIn = false;

  constructor(private store: Store<any>, private loginService: LoginService) {}

  ngOnInit() {
    this.isUserLoggedIn();
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

  private logout = () => {
    this.isLoggedIn = false;
    this.loginService.logout();
  };
}
