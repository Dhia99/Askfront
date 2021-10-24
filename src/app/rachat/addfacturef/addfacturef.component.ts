import { FournisseurFacture } from 'src/app/models/facturef.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FournisseurModel } from 'src/app/models/fournisseur.model';
import { ListProduct } from 'src/app/models/Listproduct.model';
import { FacturesService } from 'src/app/services/facturef.service';
import { FournisseursService } from 'src/app/services/fournisseurs.service';
import { ProductService } from 'src/app/services/product.service';
import { Paiement } from 'src/app/models/paiement';
import { PaiementService } from 'src/app/services/paiement.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-addfacturef',
  templateUrl: './addfacturef.component.html',
  styleUrls: ['./addfacturef.component.css']
})
export class AddfacturefComponent implements OnInit {
  products: any;
  ress: any;
  p: any;
  q: any;
  TTC: any;
  HT: any;
  libelle: any
  TOT_HT: any;
  TOT_TTC: any;
  factures: any;
  TAXA: any;
  MONTANT_TVA: any;
  values: any;
  index_fournisseur: any;
  f: any;
  fournisseur = new FournisseurModel();
  facture = new FournisseurFacture();
  Net: any;
  prod: any;
  facturefournisseur: FournisseurFacture[] = [new FournisseurFacture()];
  myDate = new Date();
  constructor(private route: ActivatedRoute, private router: Router, private toastr: ToastrService, private factureService: FacturesService, private productService: ProductService, private four: FournisseursService, private paiement: PaiementService) { }
  ngOnInit(): void {

    this.getfournisseur();
    this.facture.Timbre_fiscale = 0.6;
    this.getFactureData()
    this.getproduits();
    this.facture.Montant_TTC = 0;
    this.facture.Montant_TVA = 0;
    this.facture.Total_HT=0;
    this.facture.date_creation=formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.facture.note="pas de note";
    this.facture.Ref_Facture="Fac-"
    console.log("-----",this.facture.date_creation);
  }


  add() {
    let fact = new FournisseurFacture();
    this.facturefournisseur.push(fact);
  }
  getFactureData() {
    this.factureService.getData().subscribe(res => {
      this.factures = res;
    });
  }
  insertData() {

    console.log(this.facture);
    this.facture.Etat = "non payé";
    this.facture.Timbre_fiscale = 0.6;
    this.facture.Nom_fournisseur = this.f[this.index_fournisseur].NOM
    this.facture.id_fournisseur = this.f[this.index_fournisseur].id
    this.facture.quantite_entre = 999;
/*     this.facture.date_creation=this.myDate;
 */
  let listAchat: Array<ListProduct> = new Array();
    for (var i = 0; i < this.facturefournisseur.length; i++) {
      let product = new ListProduct();

      console.log("##++",this.facturefournisseur[i].product);
      product.quantite = this.facturefournisseur[i].quantite_entre;
      product.id_product = this.facturefournisseur[i].produit.id;
      product.Libelle = this.facturefournisseur[i].produit.name;

      listAchat.push(product);
    }
    this.facture.ListProduct = listAchat;
    this.factureService.insertData(this.facture).subscribe(res => {
      this.router.navigate(['rachat/achat/facturef']);
      this.toastr.success('', 'Facture Enregistrée');
    });


    // let paiementt = new Paiement();
    // paiementt.paye="0";
    // paiementt.reste=this.facture.Montant_TTC;
    // paiementt.montant=this.facture.Montant_TTC
    // paiementt.date_echenace=this.facture.date_echeance;
    // paiementt.date_reglement=this.facture.date_creation;

    // this.paiement.insertData(paiementt).subscribe(res=>{




    // });

  }
  getproduits() {
    this.productService.getData().subscribe(res => {
      this.products = res;

    });
  }
  getfournisseur() {
    this.four.getfournisseurData().subscribe(res => {
      this.f = res;
    });
  }
  getSelecteItem(factfour: any) {
    this.productService.getProductById(factfour.id_product).subscribe(res => {
      factfour.produit = res;
      console.log(factfour);
    });
  }
  getq(factfour: any) {
    let qte = factfour.quantite_entre;
    factfour.Montant_TVA = ((factfour.produit.priceht * factfour.produit.TVA) / 100) * qte;
    factfour.Taxe_Applique = factfour.produit.typetaxe;
    factfour.Montant_TTC = qte * factfour.produit.pricettc;
    factfour.Total_HT = qte * factfour.produit.priceht;
    this.facture.Montant_TTC = 0;
    this.facture.Montant_TVA = 0;
    this.facture.Total_HT = 0;
    for (var i = 0; i < this.facturefournisseur.length; i++) {
      this.facture.Montant_TTC += this.facturefournisseur[i].Montant_TTC;
      this.facture.Montant_TVA += this.facturefournisseur[i].Montant_TVA;
      this.facture.Total_HT += this.facturefournisseur[i].Total_HT;
      this.Net = this.facture.Montant_TTC + this.facture.Timbre_fiscale;
    }
  }
  annuler() {
    this.router.navigate(['rachat/achat/facturef']);
    this.toastr.error('', 'Annulation');
  }
}
