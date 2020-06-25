import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CollectionRoutingModule } from "./collection-routing.module";
import { CollectionComponent } from "./collection.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [CollectionComponent],
  imports: [CommonModule, CollectionRoutingModule, NgbModule, FormsModule],
})
export class CollectionModule {}
