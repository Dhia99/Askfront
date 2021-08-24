import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { productModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  product = new productModel();
constructor(private ProductService:ProductService,private toastr: ToastrService) { }
ngOnInit(): void {
  this.getProductsData()
}
getProductsData(){
  this.ProductService.getData().subscribe(res=>{
  this.products=res;
  });
}
insertData(){
  this.ProductService.insertData(this.product).subscribe(res=>{
    this.getProductsData();
    });
}
deleteProduct(id: any){
  this.ProductService.deleteData(id).subscribe(res=>{
    this.getProductsData();
    this.toastr.success('', 'Produit supprimé :)');
    });
}
}

