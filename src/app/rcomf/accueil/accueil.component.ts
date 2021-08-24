import { Component, OnInit } from '@angular/core';
import { depenseService } from 'src/app/services/depense.service';
import { factureService } from 'src/app/services/facture.service';
import { FacturesService } from 'src/app/services/facturef.service';
import { operationService } from 'src/app/services/opeartion.service';
import { PaiementService } from 'src/app/services/paiement.service';
import { PaiementcService } from 'src/app/services/paiementc.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  nbprod:any;
  facturef:any;
  facture:any;
  mp:any;
  reg:any;
  areg:any;
  mp1:any;
  reg1:any;
  areg1:any;
  treso:any;
  op:any;
  dep:any;
  rev:any;
  dep0:any;
  op1:any;
  depp:any;
  constructor(private operationservice:operationService,private depenseservice:depenseService,private produitservice:ProductService,private factureServicef: FacturesService,private factService: factureService,private paiementService1:PaiementService,private paiementService:PaiementcService) { }
  ngOnInit(): void {
    this.get();
    this.getfactureffdata();
    this.getfacturefdata();
    this.gettreso();
  }
  get(){
    this.produitservice.getNumberProduct().subscribe(res=>{
    this.nbprod=res;
  });
  }
  getfactureffdata(){
    this.factureServicef.getData().subscribe(res=>{
    this.facturef=res;
    console.log("####",this.facturef);
    });
  }
  getfacturefdata(){
    this.factService.getData().subscribe(res=>{
    this.facture=res;
    console.log("####",this.facture);
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
  gettreso(){
    this.paiementService.getData().subscribe(res=>{
    this.mp=res;
    this.reg=0;
    this.areg=0;
    console.log("Vente");
    for (var i = 0;i <this.mp.length; i++) {
     this.reg+=this.mp[i].paye;
     console.log(this.reg);
     }
    });
    this.paiementService1.getData().subscribe(res=>{
      this.mp1=res;
      this.reg1=0;
      this.areg1=0;
      console.log("achat");
      for (var i = 0;i <this.mp1.length; i++) {
       this.reg1+=this.mp1[i].paye;
       console.log(this.reg1);
       this.treso=this.reg-this.reg1;
       }
      });
      this.depenseservice.getData().subscribe(res=>{
        this.dep=res;
        this.depp=0;
        this.dep0=0;
        for(var i=0;i<this.dep.length;i++){
          this.dep0=this.reg1+this.dep[i].montant;
          this.treso-=this.dep[i].montant;
        }
      })
      this.operationservice.getData().subscribe(res=>{
        this.op=res;
        this.rev=0;
        this.op1=0;
        for (var i = 0;i <this.op.length; i++){
          if (this.op[i].typep=="Crédit"){
            this.op1=this.reg+this.op[i].montant;
            this.treso+=this.op[i].montant;
          }else{
            this.dep0+=this.op[i].montant;
            this.treso-=this.op[i].montant;
          }
        }
      })
}
}
