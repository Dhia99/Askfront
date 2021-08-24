import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBonsComponent } from '../add-bons/add-bons.component';
import { BonSortieComponent } from './bon-sortie.component';

const routes: Routes = [
  {path:'',component:BonSortieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BonSortieRoutingModule { }
