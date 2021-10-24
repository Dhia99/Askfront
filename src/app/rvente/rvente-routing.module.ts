import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { BonldetailsComponent } from './bonldetails/bonldetails.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { CommdetailsComponent } from './commdetails/commdetails.component';
import { DevisdetailsComponent } from './devisdetails/devisdetails.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { EditbonlComponent } from './editbonl/editbonl.component';
import { EditcommcComponent } from './editcommc/editcommc.component';
import { EditdevisComponent } from './editdevis/editdevis.component';
import { EditfactComponent } from './editfact/editfact.component';
import { FactdetailsComponent } from './factdetails/factdetails.component';
import { ProductDetailsComponent } from './productdetails/productdetails.component';
import { RventeComponent } from './rvente.component';
const routes: Routes = [
  {path:'',component:RventeComponent,
 children:[
   {path:'',loadChildren:()=>import('./accueil/accueil.module').then(m=>m.AccueilModule)},
   {path:'vente/Devis',loadChildren:()=>import('./devis/devis.module').then(m=>m.DevisModule)},
   {path:'vente/CommandeCl',loadChildren:()=>import('./commande-client/commande-client.module').then(m=>m.CommandeClientModule)},
   {path:'vente/Bonlivraison',loadChildren:()=>import('./bon-livraison/bon-livraison.module').then(m=>m.BonLivraisonModule)},
   {path:'vente/Facture',loadChildren:()=>import('./facture/facture.module').then(m=>m.FactureModule)},
   {path:'Products',loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule)},
   {path:'Products/ProductDetails/:id',component:ProductDetailsComponent},
   {path:'Clients',loadChildren:()=>import('./clients/clients.module').then(m=>m.ClientsModule)},
   {path:'Clients/Addclient',component:AddClientComponent},
   {path:'Clients/clientDetails/:id',component:ClientDetailsComponent},
   {path:'Clients/Editclient/:id',component:EditClientComponent},
   {path:'RespCompte',loadChildren:()=>import('./rescompte/rescompte.module').then(m=>m.RescompteModule)},
   {path:'vente/Bonlivraison/Addbonl',loadChildren:()=>import('./addbonl/addbonl.module').then(m=>m.AddbonlModule)},
   {path:'vente/Devis/Adddevis',loadChildren:()=>import('./adddevis/adddevis.module').then(m=>m.AdddevisModule)},
   {path:'vente/CommandeCl/Addcomm',loadChildren:()=>import('./add-comm/add-comm.module').then(m=>m.AddCommModule)},
   {path:'vente/Facture/Addfact',loadChildren:()=>import('./add-fact/add-fact.module').then(m=>m.AddFactModule)},
   {path:'vente/Facture/factdetails/:id',component:FactdetailsComponent},
   {path:'vente/Facture/editfact/:id',component:EditfactComponent},
   {path:'vente/Devis/Editdevis/:id',component:EditdevisComponent},
   {path:'vente/Devis/devisDetails/:id',component:DevisdetailsComponent},
   {path:'vente/CommandeCl/commDetails/:id',component:CommdetailsComponent},
   {path:'vente/CommandeCl/editcomm/:id',component:EditcommcComponent},
   {path:'vente/Bonlivraison/editbonl/:id',component:EditbonlComponent},
   {path:'vente/Bonlivraison/bonldetails/:id',component:BonldetailsComponent}
 ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RventeRoutingModule { }




