import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { HomeTabComponent } from "./home-tab/home-tab.component";

@NgModule({
  declarations: [HomeComponent, HomeTabComponent],
  exports: [HomeTabComponent],
  imports: [CommonModule, HomeRoutingModule, NgbModule],
})
export class HomeModule {}
