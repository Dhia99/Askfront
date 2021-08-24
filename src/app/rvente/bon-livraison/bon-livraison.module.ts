import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonLivraisonRoutingModule } from './bon-livraison-routing.module';
import { BonLivraisonComponent } from './bon-livraison.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [BonLivraisonComponent],
  imports: [
    CommonModule,
    BonLivraisonRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class BonLivraisonModule { }
