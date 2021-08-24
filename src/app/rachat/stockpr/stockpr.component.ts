import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-stockpr',
  templateUrl: './stockpr.component.html',
  styleUrls: ['./stockpr.component.css']
})
export class StockprComponent implements OnInit {
  products: any;
  nbprod: any;
  ht:any;
  ttc:any;
  public:any;
  constructor(private ProductService:ProductService,private toastr: ToastrService) { }
  ngOnInit(): void {
    this.getProductsData();
  }
  getProductsData(){
    this.ProductService.getData().subscribe(res=>{
    this.products=res;
    this.ht=0;
    this.ttc=0;
    this.public=0;
    for (var i = 0;i <this.products.length; i++) {
      this.ht+=this.products[i].priceht;
      this.ttc+=this.products[i].pricettc;
      this.public+=this.products[i].pricev;
      }
  });
    this.ProductService.nbprod().subscribe(res=>{
    this.nbprod=res;
  });
 }
}
