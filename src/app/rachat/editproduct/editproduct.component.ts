import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { productModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditProductsComponent implements OnInit {
  id:any;
  data:any;
  product =new productModel();
  products:any;
  typp: any;
  tva: any;
  res:any;
  constructor(private productService:ProductService ,private route:ActivatedRoute,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getProductData();
  }
  getProductData(){
    this.productService.getProductById(this.id).subscribe(res=>{
      this.data=res;
      this.product=this.data;
    });
  }
updateProduct(){
 this.productService.updateData(this.id,this.product).subscribe(res=>{
  this.router.navigate(['rachat/Products']);
  this.toastr.success('avec succès', 'Produit modifié :)');
 });
}
deleteProduct(id: any){
  this.productService.deleteData(id).subscribe(res=>{
    this.router.navigate(['rachat/Products']);
    this.toastr.success('', 'Produit supprimé :)');
    });
}
annuler(){
  this.router.navigate(['rachat/Products']);
  this.toastr.error('', 'Annulation');
  }
  gettva(event:any){
    this.tva = event.target.value;
    this.product.TVA=this.tva;
  }
  gettypep(event:any){
    this.product.priceht=this.product.pricev;
    var priceht = Number(this.product.priceht);
    var pricettc = Number(this.product.pricettc);
    var tva = this.product.TVA/100;
    this.typp = event.target.value;
    this.product.typep=this.typp;
    console.log(this.typp)
    console.log(this.product.TVA);
    if(this.typp==="HT"){
      pricettc=priceht+priceht*tva;
      this.product.pricettc=pricettc;
      this.product.priceht=priceht;
    }
    if(this.typp==="TTC"){
      pricettc=priceht;
      priceht=priceht-priceht*tva;
      this.product.priceht=priceht
      this.product.pricettc=pricettc
    }


}
}

