import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientsService } from 'src/app/services/clients.service';
import { factureService } from 'src/app/services/facture.service';
import { ProductService } from 'src/app/services/product.service';
import {formatDate} from '@angular/common';
import { Paiementc } from 'src/app/models/paiementc';
import { Facturemodel } from 'src/app/models/Facture.model';
import { PaiementcService } from 'src/app/services/paiementc.service';
@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  facturec = new Facturemodel();
  ht: any;
  ttc:any;
  areg:any;
  Net:any=0;
  reg:any;
  FactById: any;
  MontantFacture: any;
  values: any;
  rest: any;
  mp:any;
  estpayer:boolean = false;
  montantPayer=0;
  factureSelectionner= new Facturemodel();
  p:any;
  paiements:Paiementc[]=new Array<Paiementc>();
  paiement=new Paiementc();
  sumRetard:any=0;
  facture: any;
  ne:any;
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private productService:ProductService,private clientservice:ClientsService,private factService: factureService,private paiementService:PaiementcService) { }
  ngOnInit(): void {
    this.getfacturefdata();
    this.getSUmRetardAPaye();
    this.getpaiementdata();
    this.getmp(event);
    this.paiement.date_reglement=formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.insert();
  }
  getSUmRetardAPaye(){
    console.log("sum retard ok");
    this.paiementService.getSUmRetardAPaye().subscribe(res=>{
      this.sumRetard=res.sumRetard;
    })
  }
  getfacturefdata(){
    this.factService.getData().subscribe(res=>{
    this.facture=res;
    console.log("####",this.facture);
    this.ht=0;
    this.ttc=0;
    this.Net=0;
    this.ne=0;
    for (var i = 0;i <this.facture.length; i++) {
     this.ht+=this.facture[i].Total_HT;
     this.ttc+=this.facture[i].Montant_TTC;
     this.ne=this.facture[i].Montant_TTC+this.facture[i].Timbre_fiscale
     this.Net+=this.ne;
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
payer(facturec:Facturemodel) {
  this.factureSelectionner= facturec;
  this.montantPayer=0;
  this.paiement.date_reglement=formatDate(new Date(), 'yyyy-MM-dd', 'en');
  this.paiement.date_echenace=this.factureSelectionner.date_echeance;
  this.paiement.reffact=this.factureSelectionner.Ref_Facture;
  this.paiement.client=this.factureSelectionner.Nom_client;
  console.log(this.paiement.client);
  this.paiementService.getPaiemenetsOfFacture(facturec.id).subscribe(res => {
     console.log("#####Vente",this.montantPayer);
     this.paiements=res;
     for (var i = 0; i < this.paiements.length; i++) {
       this.montantPayer+= this.paiements[i].paye;
     }
   });
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
    }
  createPaiement(){
    this.paiement.id_facture=this.factureSelectionner.id;
    this.paiement.reffact=this.factureSelectionner.Ref_Facture;
    this.paiement.client=this.factureSelectionner.Nom_client;
    let restPaye=this.paiement.reste;
    this.paiementService.insertData(this.paiement).subscribe(res => {
      this.paiement=new Paiementc();
      if(restPaye>0 ){
        this.factureSelectionner.Etat="patiellement payé"
      }else if(restPaye==0)
      this.factureSelectionner.Etat="payé"
      console.log("this.paiement.reste",restPaye);
      this.factService.updateData(this.factureSelectionner.id, this.factureSelectionner).subscribe(
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
