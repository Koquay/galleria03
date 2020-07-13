import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { timer } from "rxjs";
import { ClearMessageAction } from "./message.action";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.scss"],
})
export class MessageComponent implements OnInit {
  private errorMessage;
  private infoMessage;
  private message;
  private title;
  private messageTimer = timer(600000);
  private messageSubscriber;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.getMessages();
  }

  private getMessages = () => {
    const messageSelector = (state) => {
      return state.message;
    };
    let message$ = this.store.select(messageSelector);

    message$.subscribe((message) => {
      console.log("message", message);
      this.errorMessage = message.error;
      this.infoMessage = message.info;
      this.message = this.errorMessage || this.infoMessage;
      this.title = this.errorMessage ? "ERROR" : "INFO";

      this.initMessageCloseTimer();
    });
  };

  private initMessageCloseTimer = () => {
    this.messageSubscriber = this.messageTimer.subscribe(() => {
      this.clearMessage();
    });
  };

  private clearMessage = () => {
    this.store.dispatch(new ClearMessageAction());
    this.messageSubscriber.unsubscribe();
  };
}
