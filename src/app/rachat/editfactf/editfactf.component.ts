import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FournisseurFacture } from 'src/app/models/facturef.model';
import { FacturesService } from 'src/app/services/facturef.service';
import { FournisseursService } from 'src/app/services/fournisseurs.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-editfactf',
  templateUrl: './editfactf.component.html',
  styleUrls: ['./editfactf.component.css']
})
export class EditfactfComponent implements OnInit {
  facturef: any;
  data: any;
  id:any;
  listProduct: any;
  products: any;
  Net: any;
  f: any;
  facturefs=new FournisseurFacture();
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private factureService: FacturesService,private productService:ProductService,private four:FournisseursService) { }
  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getfacturedata();
  }
  getfacturedata(){
  this.factureService.getFactureById(this.id).subscribe(res=>{
  this.data=res;
  this.facturefs=this.data;
  this.Net=this.facturefs.Montant_TTC+this.facturefs.Timbre_fiscale;
  })
  }
  add(){
  let fact = new FournisseurFacture();
  this.listProduct.push(fact);
  }
  getProductsData() {
    this.factureService.getData().subscribe(res => {
    this.facturef = res;
    });
  }
  getfournisseur(){
    this.four.getfournisseurData().subscribe(res => {
    this.f = res;
    });
  }
  getproduits() {
    this.productService.getData().subscribe(res => {
    this.products=res;
    });
  }
  getSelecteItem(prod:any) {
    this.productService.getProductById(prod.id_product).subscribe(res => {
    prod.product=res;
    console.log(prod);
    });
  }
  getq(prod:any) {
    let qte=prod.quantite_entre;
    prod.Montant_TVA=((prod.product.priceht*prod.product.TVA)/100)*qte;
    prod.Taxe_Applique=prod.product.typetaxe;
    prod.Montant_TTC=qte*prod.product.pricettc;
    prod.Total_HT=qte*prod.product.priceht;
    this.facturef.Montant_TTC=0;
    this.facturef.Montant_TVA=0;
    this.facturef.Total_HT=0;
    for (var i = 0; i < this.listProduct.length; i++) {
    this.facturef.Montant_TTC+=this.listProduct[i].Montant_TTC;
    this.facturef.Montant_TVA+=this.listProduct[i].Montant_TVA;
    this.facturef.Total_HT+=this.listProduct[i].Total_HT;
    this.Net=this.facturef.Montant_TTC+this.facturef.Timbre_fiscale;
}
}
updatefacturef(){
  this.factureService.updateData(this.id,this.facturefs).subscribe(res=>{

  });
}
annuler(){
  this.router.navigate(['rachat/achat/facturef']);
  this.toastr.error('', 'Annulation');
}

}
