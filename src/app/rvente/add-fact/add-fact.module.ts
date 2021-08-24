import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFactRoutingModule } from './add-fact-routing.module';
import { AddFactComponent } from './add-fact.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AddFactComponent],
  imports: [
    CommonModule,
    AddFactRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class AddFactModule { }
