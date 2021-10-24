import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Inventairemodel } from 'src/app/models/inventaire.model';
import { InventaireserviceService } from 'src/app/services/inventaireservice.service';
import { ProductService } from 'src/app/services/product.service';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-addinv',
  templateUrl: './addinv.component.html',
  styleUrls: ['./addinv.component.css']
})
export class AddinvComponent implements OnInit {
  inv = new Inventairemodel();
  p: any;
  index_produit: any;
  products:any;
  qte:any;
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private invservice:InventaireserviceService,private productService:ProductService) { }
  ngOnInit(): void {
    this.getProductsData();
    this.inv.Enstock=0;
    this.inv.quantite=0;
    this.inv.valeuru=0;
    this.inv.note="pas de note";
    this.inv.date_creation=formatDate(new Date(), 'yyyy-MM-dd', 'en');
  }
  insertData(){
    this.inv.Libelle = this.p[this.index_produit].name
    this.inv.id_product = this.p[this.index_produit].id
    this.inv.Enstock = this.p[this.index_produit].Enstock
    this.invservice.insertData(this.inv).subscribe(res => {
    this.router.navigate(['rachat/inventaire']);
    this.toastr.success('', 'Inventaire ajouté');
    });
  }
  getProductsData(){
    this.productService.getData().subscribe(res=>{
    this.products=res;
    });
  }

  annuler(){
    this.router.navigate(['rachat/inventaire']);
    this.toastr.error('', 'Annulation');
  }
}
