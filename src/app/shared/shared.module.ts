import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { HeaderComponent } from "./components/header/header.component";
import { SectionHeaderComponent } from "./components/section-header/section-header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MessageComponent } from './message/message/message.component';

@NgModule({
  declarations: [HeaderComponent, SectionHeaderComponent, FooterComponent, MessageComponent],
  exports: [HeaderComponent, SectionHeaderComponent, FooterComponent, MessageComponent],
  imports: [CommonModule, SharedRoutingModule],
})
export class SharedModule {}
