import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilRoutingModule } from './accueil-routing.module';
import { AccueilComponent } from './accueil.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AccueilComponent],
  imports: [
    CommonModule,
    AccueilRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class AccueilModule { }
