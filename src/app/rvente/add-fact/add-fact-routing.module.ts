import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFactComponent } from './add-fact.component';

const routes: Routes = [
  {path:'',component:AddFactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddFactRoutingModule { }
