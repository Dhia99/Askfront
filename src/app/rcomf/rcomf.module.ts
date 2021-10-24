import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RcomfRoutingModule } from './rcomf-routing.module';
import { RcomfComponent } from './rcomf.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { TresoComponent } from './treso/treso.component';
import { CombComponent } from './comb/comb.component';
import { ChtrComponent } from './chtr/chtr.component';
import { BfComponent } from './bf/bf.component';
import { BcComponent } from './bc/bc.component';
import { RcomfcopmteComponent } from './rcomfcopmte/rcomfcopmte.component';
import { AddchtrComponent } from './addchtr/addchtr.component';
import { SoldepComponent } from './soldep/soldep.component';
import { SoldesComponent } from './soldes/soldes.component';
import { Adddep1Component } from './adddep1/adddep1.component';
import { Adddep2Component } from './adddep2/adddep2.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [RcomfComponent, SidebarComponent, TopbarComponent, FooterComponent, AccueilComponent, TresoComponent, CombComponent, ChtrComponent, BfComponent, BcComponent, RcomfcopmteComponent, AddchtrComponent, SoldepComponent, SoldesComponent, Adddep1Component, Adddep2Component],
  imports: [
    CommonModule,
    RcomfRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ChartsModule
  ]
})
export class RcomfModule { }
