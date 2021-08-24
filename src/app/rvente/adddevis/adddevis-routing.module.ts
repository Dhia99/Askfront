import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddevisComponent } from './adddevis.component';

const routes: Routes = [
  {path:'',component:AdddevisComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdddevisRoutingModule { }
