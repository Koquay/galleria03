import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { HeaderComponent } from "./components/header/header.component";
import { SectionHeaderComponent } from "./components/section-header/section-header.component";

@NgModule({
  declarations: [HeaderComponent, SectionHeaderComponent],
  exports: [HeaderComponent, SectionHeaderComponent],
  imports: [CommonModule, SharedRoutingModule],
})
export class SharedModule {}
