import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeClientComponent } from './commande-client.component';

const routes: Routes = [
  {path:'',component:CommandeClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeClientRoutingModule { }
