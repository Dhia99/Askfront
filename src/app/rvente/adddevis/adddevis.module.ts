import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdddevisRoutingModule } from './adddevis-routing.module';
import { AdddevisComponent } from './adddevis.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdddevisComponent],
  imports: [
    CommonModule,
    AdddevisRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class AdddevisModule { }
