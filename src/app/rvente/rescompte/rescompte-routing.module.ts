import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RescompteComponent } from './rescompte.component';

const routes: Routes = [
  {path:'',component:RescompteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RescompteRoutingModule { }
