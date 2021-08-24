import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureRoutingModule } from './facture-routing.module';
import { FactureComponent } from './facture.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [FactureComponent],
  imports: [
    CommonModule,
    FactureRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class FactureModule { }
