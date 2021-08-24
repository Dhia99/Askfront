import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBonsComponent } from './add-bons.component';

const routes: Routes = [
  {path:'',component:AddBonsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddBonsRoutingModule { }
