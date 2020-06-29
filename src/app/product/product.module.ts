import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductRoutingModule } from "./product-routing.module";
import { ProductComponent } from "./product.component";
import { SharedModule } from "../shared/shared.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, ProductRoutingModule, SharedModule, NgbModule],
})
export class ProductModule {}
