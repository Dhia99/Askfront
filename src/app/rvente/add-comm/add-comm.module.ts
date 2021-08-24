import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCommRoutingModule } from './add-comm-routing.module';
import { AddCommComponent } from './add-comm.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AddCommComponent],
  imports: [
    CommonModule,
    AddCommRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class AddCommModule { }
