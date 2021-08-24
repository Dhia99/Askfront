import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:any;
  data:any;
  product:any;
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
  deleteProduct(id: any){
    this.productService.deleteData(id).subscribe(res=>{
      this.router.navigate(['rvente/Products']);
      this.toastr.warning('avec succès', 'Produit supprimé :)');
      });
  }
  annuler(){
    this.router.navigate(['rvente/Products']);
  }
}
