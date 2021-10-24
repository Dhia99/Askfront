import { Component, OnInit } from '@angular/core';
import { depenseService } from 'src/app/services/depense.service';
import { operationService } from 'src/app/services/opeartion.service';
import { PaiementService } from 'src/app/services/paiement.service';
import { PaiementcService } from 'src/app/services/paiementc.service';

@Component({
  selector: 'app-treso',
  templateUrl: './treso.component.html',
  styleUrls: ['./treso.component.css']
})
export class TresoComponent implements OnInit {
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
  constructor(private depenseservice:depenseService,private paiementService1:PaiementService,private paiementService:PaiementcService,private operationservice:operationService) { }

  ngOnInit(): void {
    this.gettreso();
  }
  gettreso(){
    this.paiementService.getData().subscribe(res=>{
    this.mp=res;
    this.reg=0;
    this.areg=0;
    this.treso=0;
    console.log("Vente");
    for (var i = 0;i <this.mp.length; i++) {
     this.reg+=this.mp[i].paye;
     console.log(this.reg);
     this.treso=this.reg-this.reg1;
     }
    });
    this.paiementService1.getData().subscribe(res=>{
      this.mp1=res;
      this.reg1=0;
      this.areg1=0;
      this.treso=0;
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
          this.dep0+=this.dep[i].montant;
          this.depp=this.reg1+this.dep0;
          this.treso-=this.dep[i].montant;
        }
      })
      this.operationservice.getData().subscribe(res=>{
        this.op=res;
        this.rev=0;
        this.op1=0;
        this.treso=0;
        for (var i = 0;i <this.op.length; i++){
          if (this.op[i].typep=="Crédit"){
            this.op1+=this.op[i].montant
            this.rev=this.reg+this.op1;
            this.treso+=this.rev;
          }else{
            this.dep0+=this.op[i].montant;
            this.treso-=this.dep0;
          }
        }
      })
}
}
