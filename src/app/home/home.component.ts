import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  private homeCarousel;
  private collections;
  private featuredItems;
  private blog;
  private brands;
  private sales;
  private services;
  private us;
  private footerLinks;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.getHomeStaticData();
    this.getFooterStaticData();
  }

  private getHomeStaticData = () => {
    const homeSelector = (state) => {
      return state.home;
    };
    let home$ = this.store.select(homeSelector);

    home$.subscribe((homeStaticData) => {
      this.homeCarousel = homeStaticData.homeStaticData.homeCarousel;
      this.collections = homeStaticData.homeStaticData.collections;
      this.featuredItems = homeStaticData.homeStaticData.featuredItems;
      this.blog = homeStaticData.homeStaticData.blog;
      this.brands = homeStaticData.homeStaticData.brands;
      this.sales = homeStaticData.homeStaticData.sales;
      this.services = homeStaticData.homeStaticData.services;
    });
  };

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
