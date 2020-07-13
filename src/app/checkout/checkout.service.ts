import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";
import { ClearMessageAction, AddErrorAction, AddInfoAction } from '../shared/message/message/message.action';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: "root",
})
export class CheckoutService {
  private baseUrl = "/api/order";

  constructor(private httpclient: HttpClient, private store:Store<any>) {}

  public placeOrder = (orderData) => {
    this.store.dispatch(new ClearMessageAction());
    
    return this.httpclient.put(this.baseUrl, { orderData }).pipe(
      tap((order) => {
        console.log("order", order);
        this.store.dispatch(new AddInfoAction('Your order was successfully placed.'))
      }),
      catchError(error => {
        console.log("error", error);
        this.store.dispatch(new AddErrorAction(error.error));
        throw error;
      })
    );
  };
}
