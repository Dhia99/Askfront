import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddbonlRoutingModule } from './addbonl-routing.module';
import { AddbonlComponent } from './addbonl.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AddbonlComponent],
  imports: [
    CommonModule,
    AddbonlRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class AddbonlModule { }
