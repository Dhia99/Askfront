import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCommComponent } from './add-comm.component';

const routes: Routes = [
  {path:'',component:AddCommComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCommRoutingModule { }
