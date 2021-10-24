import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { productModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  products:any;
  product = new productModel();
  data: any;
  typp: any;
  tva: any;
  res:any;
  constructor(private productService:ProductService,private route:ActivatedRoute ,private router:Router,private toastr: ToastrService) { }
  ngOnInit(): void {
    this.getProductsData();
    this.product.priceht=this.product.pricev;
    this.product.type='service';
    this.product.typep='HT';
    this.product.TVA=0;
    this.product.desc='pas desc';
    this.product.typetaxe='fodec';
    this.product.Enstock=0;
    this.product.refconst=0;
    this.product.refint=0;
    this.product.marque="marque";
    this.product.category="Cat";
  }
  getProductsData(){
    this.productService.getData().subscribe(res=>{
    this.products=res;
    });
  }
  insertData(){
    this.productService.insertData(this.product).subscribe(res=>{
      this.router.navigate(['rachat/Products']);
      this.toastr.success('avec succès', 'Produit ajouté :)');
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



//resultat(event:any){
  //this.typp = event.target.value;
  //this.tva = event.target.value/100;
  //var tvavvv = Number(this.tva);console.log("tva",tvavvv);

  // var price = Number(this.product.price);
  // var pricef = Number(this.product.pricef);
  //    if(this.typp==='HT'){
  //     console.log(1+3);
  //     pricef=price+price*tva;
  //     this.product.pricef=pricef;
  //   }
  //    if(this.typp==='TTC'){
  //     console.log(1+1);
  //     pricef=price;
  //     price=price-price*tva;
  //     this.product.price=price
  //     this.product.pricef=pricef
  //   }
//}
}
