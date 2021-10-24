import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { clientModel } from 'src/app/models/clients.model';
import { Commclmodel } from 'src/app/models/commcl.model';
import { ClientsService } from 'src/app/services/clients.service';
import { commandeclService } from 'src/app/services/comc.service';
import { ProductService } from 'src/app/services/product.service';
import {formatDate} from '@angular/common';
import { ListProductv } from 'src/app/models/Listproductv.model';
@Component({
  selector: 'app-add-comm',
  templateUrl: './add-comm.component.html',
  styleUrls: ['./add-comm.component.css']
})
export class AddCommComponent implements OnInit {
  products: any;
  ress: any;
  p: any;
  q:any;
  TTC:any;
  HT:any;
  libelle:any
  TOT_HT:any;
  TOT_TTC:any;
  commcls: any;
  TAXA:any;
  MONTANT_TVA:any;
  values: any;
  index_client:any;
  f:any;
  client =new clientModel;
  commcl = new Commclmodel;
  Net: any;
  prod:any;
  listProduct: Commclmodel[] = [new Commclmodel()];
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private productService:ProductService,private clientservice:ClientsService,private cmdService: commandeclService) { }
  ngOnInit(): void {
    this.getclients();
    this.commcl.Timbre_fiscale=0.6;
    this.getProductsData()
    this.getproduits();
    this.commcl.Total_HT=0;
    this.commcl.Montant_TTC=0;
    this.commcl.Montant_TVA=0;
    this.commcl.note="pas de note";
    this.commcl.Ref_Facture="comm-";
    this.commcl.date_creation=formatDate(new Date(), 'yyyy-MM-dd', 'en');
  }
  add(){
    let comm = new Commclmodel();
    this.listProduct.push(comm);
  }
    getProductsData() {
      this.cmdService.getData().subscribe(res => {
      this.commcls = res;
      });
    }
    insertData() {
      console.log(this.commcl);
      this.commcl.Etat="Non Confirmée";
      this.commcl.Timbre_fiscale=0.6;
      this.commcl.Nom_client=this.f[this.index_client].name
      this.commcl.id_client=this.f[this.index_client].id
      this.commcl.quantite_entre=999;
      let listvente: Array<ListProductv> = new Array();
      for (var i = 0; i < this.listProduct.length; i++) {
        let product = new ListProductv();
        product.quantite=this.listProduct[i].quantite_entre;
        product.id_product=this.listProduct[i].produit.id;
        product.Libelle=this.listProduct[i].produit.name;
        listvente.push(product);
      }
      this.commcl.ListProductv=listvente;
      this.cmdService.insertData(this.commcl).subscribe(res => {
        this.router.navigate(['rvente/vente/CommandeCl']);
        this.toastr.success('avec succès', 'Commande Enregistrée');
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
      this.commcl.Montant_TTC=0;
      this.commcl.Montant_TVA=0;
      this.commcl.Total_HT=0;
      for (var i = 0; i < this.listProduct.length; i++) {
      this.commcl.Montant_TTC+=this.listProduct[i].Montant_TTC;
      this.commcl.Montant_TVA+=this.listProduct[i].Montant_TVA;
      this.commcl.Total_HT+=this.listProduct[i].Total_HT;
      this.Net=this.commcl.Montant_TTC+this.commcl.Timbre_fiscale;
  }
}
  annuler(){
    this.router.navigate(['rvente/vente/CommandeCl']);
    this.toastr.error('', 'Annulation');
  }
}
