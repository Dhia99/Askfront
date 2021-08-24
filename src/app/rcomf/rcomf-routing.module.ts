import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddchtrComponent } from './addchtr/addchtr.component';
import { Adddep1Component } from './adddep1/adddep1.component';
import { Adddep2Component } from './adddep2/adddep2.component';
import { BcComponent } from './bc/bc.component';
import { BfComponent } from './bf/bf.component';
import { ChtrComponent } from './chtr/chtr.component';
import { CombComponent } from './comb/comb.component';
import { RcomfComponent } from './rcomf.component';
import { RcomfcopmteComponent } from './rcomfcopmte/rcomfcopmte.component';
import { SoldepComponent } from './soldep/soldep.component';
import { SoldesComponent } from './soldes/soldes.component';
import { TresoComponent } from './treso/treso.component';
const routes: Routes = [
  {path:'',component:RcomfComponent,
  children:[
    {path:'',component:AccueilComponent},
    {path:'treso',component:TresoComponent},
    {path:'comp',component:CombComponent},
    {path:'chtr',component:ChtrComponent},
    {path:'bc',component:BcComponent},
    {path:'bf',component:BfComponent},
    {path:'rcfcomp',component:RcomfcopmteComponent},
    {path:'chtr/addchtr',component:AddchtrComponent},
    {path:'treso/soldep',component:SoldepComponent},
    {path:'treso/soldep/addep1',component:Adddep1Component},
    {path:'treso/soldes',component:SoldesComponent},
    {path:'treso/soldes/addep2',component:Adddep2Component},
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RcomfRoutingModule { }
