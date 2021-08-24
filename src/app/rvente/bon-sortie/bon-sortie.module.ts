import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonSortieRoutingModule } from './bon-sortie-routing.module';
import { BonSortieComponent } from './bon-sortie.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [BonSortieComponent],
  imports: [
    CommonModule,
    BonSortieRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class BonSortieModule { }
