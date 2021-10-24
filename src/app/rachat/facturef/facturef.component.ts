import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FournisseurFacture } from 'src/app/models/facturef.model';
import { Paiement } from 'src/app/models/paiement';
import { FacturesService } from 'src/app/services/facturef.service';
import { FournisseursService } from 'src/app/services/fournisseurs.service';
import { PaiementService } from 'src/app/services/paiement.service';
import { ProductService } from 'src/app/services/product.service';
import {formatDate} from '@angular/common';
import { productModel } from 'src/app/models/product.model';
declare var $:any;
declare function openModal():any;

@Component({
  selector: 'app-facturef',
  templateUrl: './facturef.component.html',
  styleUrls: ['./facturef.component.css']
})

export class FacturefComponent implements OnInit {


  facture = new FournisseurFacture();

  facturef:any
  ht: any;
  ttc:any;
  areg:any;
  Net:any=0;
  reg:any;
  img:any=0;

  file:File[]=[];
  extract:[]=[];

  FactById: any;
  MontantFacture: any;
  values: any;
  rest: any;
  mp:any;
/*   estpayer:any;
 */
  estpayer:boolean = false;



  montantPayer=0;

 factureSelectionner= new FournisseurFacture();

  p:any;

  paiements:Paiement[]=new Array<Paiement>();
  paiement=new Paiement();
  sumRetard:any=0;
  picture:any='';

  choixWizart:any='produit';

  product = new productModel();
  productsExtract:any[] = new Array<any>();

  listIdProduct:any[] = new Array<any>();

  compteurProduct=1;
  index=0;
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private factureService: FacturesService,private productService:ProductService,private four:FournisseursService,private paiementService:PaiementService) { }
  ngOnInit(): void {

    this.getSUmRetardAPaye();

    this.getpaiementdata();
    this.getfacturefdata();
    this.getmp(event);
    this.paiement.date_reglement=formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.insert();



  }
suivant(){



  if(this.choixWizart=="produit"){

    this.index+=1
   //POST PRODUCT TO BACKEND index -1 ==> productsExtract[index-1]
    if(this.productsExtract.length>this.index)
    {



      this.product.name=this.productsExtract[this.index].name;
      this.product.Enstock=this.productsExtract[this.index].qty;


      return
    }
    else
    {

      this.choixWizart='fournisseur';
      return
    }



  }


  if(this.choixWizart=="fournisseur")
  {
    // Post Fournisseur
    this.choixWizart='facture';
    return
  }


   // Post Facture
   //Hide Model()








}
  fileChangeEvent(event: any): void {

    console.log("#### ",event.target.files[0]);

  //this.picture=event.target.files[0].name;
    this.picture=event.target.files[0];

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      //this.uploadForm.get('profile').setValue(file);
      const formData = new FormData();
    formData.append('file', file);

    $('#loadermodel').modal('show')
/*    this.factureService.getimg(formData).subscribe(res=>{

  $('#loadermodel').modal('hide')
  console.log("#### result",res);


  this.productsExtract=res['product'];

  var fournisseur = res['fournisseur']
  var facture  = res['facture']

  this.product=new productModel();

  this.product.name=this.productsExtract[this.index].name;
  this.product.Enstock=this.productsExtract[this.index].qty;

  this.compteurProduct=1;

  openModal();


  console.log("extrect",this.extract)

}) */
    }



  }


/*   postimg(){
    this.factureService.getimg(this.img).subscribe(res=>{

    });
  } */
  getSUmRetardAPaye(){
    console.log("sum retard ok");
    this.paiementService.getSUmRetardAPaye().subscribe(res=>{
      this.sumRetard=res.sumRetard;
    })
  }

 getfacturefdata(){
   this.factureService.getData().subscribe(res=>{
   this.facturef=res;
   console.log("####",this.facturef);
   this.ht=0;
   this.ttc=0;
   for (var i = 0;i <this.facturef.length; i++) {
    this.ht+=this.facturef[i].Total_HT;
    this.ttc+=this.facturef[i].Montant_TTC;
    this.Net+=this.facturef[i].facture;

    }
   });
}


getpaiementdata(){
  this.paiementService.getData().subscribe(res=>{
  this.mp=res;
  this.reg=0;
  this.areg=0;
  console.log("ach");
  for (var i = 0;i <this.mp.length; i++) {
   this.reg+=this.mp[i].paye;
   this.areg+=this.mp[i].reste;

   }
  });
}

payer(facture:FournisseurFacture) {

 this.factureSelectionner= facture;

 this.montantPayer=0;
 this.paiement.date_reglement=formatDate(new Date(), 'yyyy-MM-dd', 'en');
 this.paiement.date_echenace=this.factureSelectionner.date_echeance;
 this.paiement.reffact=this.factureSelectionner.Ref_Facture;
 this.paiement.fournisseur=this.factureSelectionner.Nom_fournisseur;
  this.paiementService.getPaiemenetsOfFacture(facture.id).subscribe(res => {

    console.log("#####ach",this.montantPayer);
    this.paiements=res;

    for (var i = 0; i < this.paiements.length; i++) {

      this.montantPayer+= this.paiements[i].paye;
    }


    /*     if(this.montantPayer==this.factureSelectionner.Montant_TTC){

      this.estpayer=true;
    }
    else if (this.montantPayer<this.factureSelectionner.Montant_TTC){
      this.estpayer=false;
    } */


  });

  /*
  this.factureService.getFactureById(id).subscribe(res => {
    this.FactById = res;

    this.MontantFacture = this.FactById.Montant_TTC;


    this.paiement.getFactureById(id).subscribe(res=>{
    this.p=res;


   console.log(this.p[0].reste);




    });  */


/*       this.paiement.paye = 0;
*/

//});
}

getmontantReste(){


  this.paiement.reste=this.factureSelectionner.Montant_TTC-this.paiement.paye-this.montantPayer;

  if(this.paiement.reste<0){
    this.paiement.paye=this.factureSelectionner.Montant_TTC-this.montantPayer;
    this.paiement.reste=this.factureSelectionner.Montant_TTC-this.paiement.paye-this.montantPayer;

  }

}

getmp(mp: any) {

  this.values = mp.target.value;
   this.p[0].paye = Number(this.p[0].paye) + Number(this.values);

   this.p[0].reste -= this.values;


}

insert() {

  this.paiementService.updateData(this.p[0].id,this.p[0]).subscribe(res => {
  });

  console.log(this.p[0]);

 /*  this.facture.Montant_TTC=0;
  this.facture.Montant_TVA=0;
  this.facture.Total_HT=0;

  let listAchat: Array<ListProduct> = new Array();

  for (var i = 0; i < this.listProduct.length; i++) {

    this.facture.Montant_TTC+=this.listProduct[i].Montant_TTC;
    this.facture.Montant_TVA+=this.listProduct[i].Montant_TVA;
    this.facture.Total_HT+=this.listProduct[i].Total_HT;
    this.Net=this.facture.Montant_TTC+this.facture.Timbre_fiscale; */

  }

  createPaiement(){
    this.paiement.id_facture=this.factureSelectionner.id;
    this.paiement.reffact=this.factureSelectionner.Ref_Facture;
    this.paiement.fournisseur=this.factureSelectionner.Nom_fournisseur;
    let restPaye=this.paiement.reste;
    this.paiementService.insertData(this.paiement).subscribe(res => {

      this.paiement=new Paiement();


      if(restPaye>0 ){
        this.factureSelectionner.Etat="patiellement payé"
      }else if(restPaye==0)
      this.factureSelectionner.Etat="payé"

      console.log("this.paiement.reste",restPaye);

      this.factureService.updateData(this.factureSelectionner.id, this.factureSelectionner).subscribe(
        res=>{
          this.toastr.success('avec succès', 'Paiement effectué :)');
          this.getfacturefdata();
        }
      )


    });
  }

  getColor(etat:any) {
    switch (etat) {
      case 'patiellement payé':
        return 'green';
      case 'payé':
        return 'blue';
      case 'non payé':
        return 'red';
    }

    return 'red';
  }


  }
