import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Bonlivraisonmodel } from 'src/app/models/bonlivraison.model';
import { clientModel } from 'src/app/models/clients.model';
import { ListProduct } from 'src/app/models/Listproduct.model';
import { bonlService } from 'src/app/services/bonl.service';
import { ClientsService } from 'src/app/services/clients.service';
import { ProductService } from 'src/app/services/product.service';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-addbonl',
  templateUrl: './addbonl.component.html',
  styleUrls: ['./addbonl.component.css']
})
export class AddbonlComponent implements OnInit {
  products: any;
  ress: any;
  p: any;
  q:any;
  TTC:any;
  HT:any;
  libelle:any
  TOT_HT:any;
  TOT_TTC:any;
  bonls: any;
  TAXA:any;
  MONTANT_TVA:any;
  values: any;
  index_client:any;
  f:any;
  client =new clientModel;
  bonl = new Bonlivraisonmodel;
  Net: any;
  prod:any;
  listProduct: Bonlivraisonmodel[] = [new Bonlivraisonmodel()];
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private productService:ProductService,private clientservice:ClientsService,private bonlservice:bonlService) { }
  ngOnInit(): void {
    this.getclients();
    this.bonl.Timbre_fiscale=0.6;
    this.getProductsData()
    this.getproduits();
    this.bonl.Total_HT=0;
    this.bonl.Montant_TTC=0;
    this.bonl.Montant_TVA=0;
    this.bonl.note="pas de note";
    this.bonl.Ref_Facture="bonl-";
    this.bonl.date_creation=formatDate(new Date(), 'yyyy-MM-dd', 'en');
  }
  add(){
    let bl = new Bonlivraisonmodel();
    this.listProduct.push(bl);
  }
    getProductsData() {
      this.bonlservice.getData().subscribe(res => {
      this.bonls = res;
      });
    }
    insertData() {
      console.log(this.bonl);
      this.bonl.Etat="Non Recu";
      this.bonl.Timbre_fiscale=0.6;
      this.bonl.Nom_client=this.f[this.index_client].name
      this.bonl.id_client=this.f[this.index_client].id
      this.bonl.quantite_entre=999;
      let listvente: Array<ListProduct> = new Array();
      for (var i = 0; i < this.listProduct.length; i++) {
        let product = new ListProduct();
        product.quantite=this.listProduct[i].quantite_entre;
        product.id_product=this.listProduct[i].id;
        product.Libelle=this.listProduct[i].Libelle;
        listvente.push(product);
      }
      this.bonl.ListProductv=listvente;
      this.bonlservice.insertData(this.bonl).subscribe(res => {
        this.router.navigate(['rvente/vente/Bonlivraison']);
        this.toastr.success('avec succès', 'Bon Livraison Enregistrée');
      });
    }
    getproduits() {
      this.productService.getData().subscribe(res => {
      this.products=res;
      });
    }
    getclients(){
      this.clientservice.getClientData().subscribe(res => {
      this.f = res;
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
      this.bonl.Montant_TTC=0;
      this.bonl.Montant_TVA=0;
      this.bonl.Total_HT=0;
      for (var i = 0; i < this.listProduct.length; i++) {
      this.bonl.Montant_TTC+=this.listProduct[i].Montant_TTC;
      this.bonl.Montant_TVA+=this.listProduct[i].Montant_TVA;
      this.bonl.Total_HT+=this.listProduct[i].Total_HT;
      this.Net=this.bonl.Montant_TTC+this.bonl.Timbre_fiscale;
  }
}
  annuler(){
    this.router.navigate(['rvente/vente/Bonlivraison']);
    this.toastr.error('', 'Annulation');
  }
}
