import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RescompteRoutingModule } from './rescompte-routing.module';
import { RescompteComponent } from './rescompte.component';
@NgModule({
  declarations: [RescompteComponent],
  imports: [
    CommonModule,
    RescompteRoutingModule
  ]
})
export class RescompteModule { }
