import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductsComponent } from '../editproduct/editproduct.component';
import { ProductDetailsComponent } from '../productdetails/productdetails.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {path:'',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
