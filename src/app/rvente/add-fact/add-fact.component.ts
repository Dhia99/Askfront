import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { clientModel } from 'src/app/models/clients.model';
import { Facturemodel } from 'src/app/models/Facture.model';
import { ListProduct } from 'src/app/models/Listproduct.model';
import { ClientsService } from 'src/app/services/clients.service';
import { factureService } from 'src/app/services/facture.service';
import { ProductService } from 'src/app/services/product.service';
import {formatDate} from '@angular/common';
import { ListProductv } from 'src/app/models/Listproductv.model';
@Component({
  selector: 'app-add-fact',
  templateUrl: './add-fact.component.html',
  styleUrls: ['./add-fact.component.css']
})
export class AddFactComponent implements OnInit {
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
  client =new clientModel();
  facture = new Facturemodel();
  Net: any;
  factureclient: Facturemodel[] = [new Facturemodel()];
  myDate = new Date();
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private productService:ProductService,private clientservice:ClientsService,private factService: factureService) { }
  ngOnInit(): void {
    this.getclients();
    this.facture.Timbre_fiscale=0.6;
    this.getfacturesData()
    this.getproduits();
    this.facture.Total_HT=0;
    this.facture.Montant_TTC=0;
    this.facture.Montant_TVA=0;
    this.facture.note="pas de note";
    this.facture.Ref_Facture="fac-";
    this.facture.date_creation=formatDate(new Date(), 'yyyy-MM-dd', 'en');
  }
  add(){
    let fact = new Facturemodel();
    this.factureclient.push(fact);
  }
    getfacturesData() {
      this.factService.getData().subscribe(res => {
      this.factures = res;
      });
    }
    insertData() {
      console.log(this.facture);
      this.facture.Etat="non payé";
      this.facture.Timbre_fiscale=0.6;
      this.facture.Nom_client=this.f[this.index_client].name
      this.facture.id_client=this.f[this.index_client].id
      this.facture.quantite_entre=999;
      let listvente: Array<ListProductv> = new Array();
      for (var i = 0; i < this.factureclient.length; i++) {
        let product = new ListProductv();
        product.quantite=this.factureclient[i].quantite_entre;
        product.id_product=this.factureclient[i].produit.id;
        product.Libelle=this.factureclient[i].produit.name;
        listvente.push(product);
      }
      this.facture.ListProductv=listvente;
      this.factService.insertData(this.facture).subscribe(res => {
      console.log("dffgfggfgfgfgfgff");
      this.router.navigate(['rvente/vente/Facture']);
      this.toastr.success('avec succès', 'Facture Enregistrée');
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
      prod.produit=res;
      console.log(prod);
      });
    }
    getq(prod:any) {
      let qte=prod.quantite_entre;
      prod.Montant_TVA=((prod.produit.priceht*prod.produit.TVA)/100)*qte;
      prod.Taxe_Applique=prod.produit.typetaxe;
      prod.Montant_TTC=qte*prod.produit.pricettc;
      prod.Total_HT=qte*prod.produit.priceht;
      this.facture.Montant_TTC=0;
      this.facture.Montant_TVA=0;
      this.facture.Total_HT=0;
      for (var i = 0; i < this.factureclient.length; i++) {
      this.facture.Montant_TTC+=this.factureclient[i].Montant_TTC;
      this.facture.Montant_TVA+=this.factureclient[i].Montant_TVA;
      this.facture.Total_HT+=this.factureclient[i].Total_HT;
      this.Net=this.facture.Montant_TTC+this.facture.Timbre_fiscale;
  }
}
  annuler(){
    this.router.navigate(['rvente/vente/Facture']);
    this.toastr.error('', 'Annulation');
  }
}
