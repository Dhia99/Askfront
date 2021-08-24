import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandeClientRoutingModule } from './commande-client-routing.module';
import { CommandeClientComponent } from './commande-client.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CommandeClientComponent],
  imports: [
    CommonModule,
    CommandeClientRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class CommandeClientModule { }
