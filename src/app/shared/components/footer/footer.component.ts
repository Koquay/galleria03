import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  private footerLinks;
  private us;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.getFooterStaticData();
  }

  private getFooterStaticData = () => {
    const footerSelector = (state) => {
      return state.footer;
    };
    let footer$ = this.store.select(footerSelector);

    footer$.subscribe((footerStaticData) => {
      this.us = footerStaticData.us;

      this.footerLinks = footerStaticData.footerLinks;
    });
  };
}
