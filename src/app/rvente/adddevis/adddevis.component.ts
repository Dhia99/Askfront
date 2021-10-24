import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { clientModel } from 'src/app/models/clients.model';
import { Devismodel } from 'src/app/models/devis.model';
import { ClientsService } from 'src/app/services/clients.service';
import { ProductService } from 'src/app/services/product.service';
import { devisService } from 'src/app/services/devis.service';
import { ListProductv } from 'src/app/models/Listproductv.model';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-adddevis',
  templateUrl: './adddevis.component.html',
  styleUrls: ['./adddevis.component.css']
})
export class AdddevisComponent implements OnInit {
  [x: string]: Object;
  products: any;
  ress: any;
  p: any;
  q:any;
  TTC:any;
  HT:any;
  libelle:any
  TOT_HT:any;
  TOT_TTC:any;
  factures: any;
  TAXA:any;
  MONTANT_TVA:any;
  values: any;
  index_client:any;
  f:any;
  client =new clientModel;
  devis:any;
  Devis=new Devismodel;
  Net: any;
  prod:any;
  listProduct: Devismodel[] = [new Devismodel()];
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private productService:ProductService,private clientservice:ClientsService,private devisService:devisService) { }
  ngOnInit(): void {
    this.getclients();
    this.Devis.Timbre_fiscale=0.6;
    this.getProductsData()
    this.getproduits();
    this.Devis.Total_HT=0;
    this.Devis.Montant_TTC=0;
    this.Devis.Montant_TTC=0;
    this.Devis.note="pas de note";
    this.Devis.Ref_Facture="dev-";
    this.Devis.date_creation=formatDate(new Date(), 'yyyy-MM-dd', 'en');
  }
  add(){
    let dev = new Devismodel();
    this.listProduct.push(dev);
  }
    getProductsData() {
      this.devisService.getData().subscribe(res => {
      this.devis = res;
      });
    }
    insertData() {
      console.log(this.devis);
      this.Devis.Timbre_fiscale=0.6;
      this.Devis.Nom_client=this.f[this.index_client].name
      this.Devis.id_client=this.f[this.index_client].id
      this.Devis.quantite_entre=999;
      let listvente: Array<ListProductv> = new Array();
      for (var i = 0; i < this.listProduct.length; i++) {
        let product = new ListProductv();
        product.quantite=this.listProduct[i].quantite_entre;
        product.id_product=this.listProduct[i].id;
        product.Libelle=this.listProduct[i].Libelle;
        listvente.push(product);
      }
      this.Devis.ListProductv=listvente;
      this.devisService.insertData(this.Devis).subscribe(res => {
        this.router.navigate(['rvente/vente/Devis']);
        this.toastr.success('avec succès', 'Devis Enregistré');
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
      this.Devis.Montant_TTC=0;
      this.Devis.Montant_TVA=0;
      this.Devis.Total_HT=0;
      for (var i = 0; i < this.listProduct.length; i++) {
      this.Devis.Montant_TTC+=this.listProduct[i].Montant_TTC;
      this.Devis.Montant_TVA+=this.listProduct[i].Montant_TVA;
      this.Devis.Total_HT+=this.listProduct[i].Total_HT;
      this.Net=this.Devis.Montant_TTC+this.Devis.Timbre_fiscale;
  }
}
  annuler(){
    this.router.navigate(['rvente/vente/Devis']);
    this.toastr.error('', 'Annulation');
  }
}
