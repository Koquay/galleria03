import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { HomeTabComponent } from "./home-tab/home-tab.component";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, HomeTabComponent],
  exports: [HomeTabComponent],
  imports: [CommonModule, HomeRoutingModule, NgbModule, SharedModule],
})
export class HomeModule {}
