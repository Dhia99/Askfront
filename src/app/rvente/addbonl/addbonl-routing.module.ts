import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbonlComponent } from './addbonl.component';

const routes: Routes = [
  {path:'',component:AddbonlComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddbonlRoutingModule { }
