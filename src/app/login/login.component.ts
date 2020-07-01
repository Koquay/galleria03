import { Component, OnInit } from "@angular/core";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  payload = { name: "", email: "a@a.com", password: "a@a.com" };

  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  private login = () => {
    console.log("payload", this.payload);
    this.loginService.login(this.payload).subscribe();
  };
}
