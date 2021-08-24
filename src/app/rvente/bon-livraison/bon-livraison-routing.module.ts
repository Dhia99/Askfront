import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BonLivraisonComponent } from './bon-livraison.component';

const routes: Routes = [
  {path:'',component:BonLivraisonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BonLivraisonRoutingModule { }
