import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBonsRoutingModule } from './add-bons-routing.module';
import { AddBonsComponent } from './add-bons.component';


@NgModule({
  declarations: [AddBonsComponent],
  imports: [
    CommonModule,
    AddBonsRoutingModule
  ]
})
export class AddBonsModule { }
