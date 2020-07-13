import { Component, OnInit } from "@angular/core";
import { checkoutDataTmp } from "../shared/model/data-model";
import { Store } from "@ngrx/store";
import { CheckoutService } from "./checkout.service";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent implements OnInit {
  private checkoutData;
  private checkoutStatic;

  constructor(
    private store: Store<any>,
    private checkoutService: CheckoutService
  ) {
    this.checkoutData = { ...checkoutDataTmp };
  }

  ngOnInit() {
    this.getCheckoutStaticData();
  }

  private getCheckoutStaticData = () => {
    const checkoutStaticSelector = (state) => {
      return state.checkout;
    };
    let checkoutStatic$ = this.store.select(checkoutStaticSelector);

    checkoutStatic$.subscribe((checkoutStatic) => {
      this.checkoutStatic = checkoutStatic;
      console.log("checkoutStatic", checkoutStatic);
    });
  };

  private placeOrder = () => {
    console.log("checkoutData", this.checkoutData);
    this.checkoutService.placeOrder(this.checkoutData).subscribe();
  };
}
