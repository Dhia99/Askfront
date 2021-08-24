import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevisRoutingModule } from './devis-routing.module';
import { DevisComponent } from './devis.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DevisComponent],
  imports: [
    CommonModule,
    DevisRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class DevisModule { }
