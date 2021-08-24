import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Inventairemodel } from 'src/app/models/inventaire.model';
import { productInv } from 'src/app/models/productin.model';
import { InventaireserviceService } from 'src/app/services/inventaireservice.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addinv',
  templateUrl: './addinv.component.html',
  styleUrls: ['./addinv.component.css']
})
export class AddinvComponent implements OnInit {
products: any;
inv=new Inventairemodel();
productInv:Inventairemodel [] = [new Inventairemodel()];
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private invservice:InventaireserviceService,private productService:ProductService) { }

  ngOnInit(): void {
    this.addinv();
  }
  add(){
    let inv = new Inventairemodel();
    this.productInv.push(inv);
  }
  addinv(){
    let listinv: Array<productInv> = new Array();
      for (var i = 0; i < this.productInv.length; i++) {
        let product = new productInv();
        product.Enstock=this.productInv[i].Enstock;
        product.id_product=this.productInv[i].id;
        product.Libelle=this.productInv[i].Libelle;
        listinv.push(product);
      }
      this.invservice.insertData(this.inv).subscribe(res=>{
      this.router.navigate(['rachat/inventaire']);
      this.toastr.success('', 'Iventaire Enregistré');
    })
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
}
  annuler(){
    this.router.navigate(['rachat/inventaire']);
    this.toastr.error('', 'Annulation');
  }
}
