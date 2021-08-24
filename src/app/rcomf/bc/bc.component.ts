import { Component, OnInit } from '@angular/core';
import { factureService } from 'src/app/services/facture.service';
import { PaiementcService } from 'src/app/services/paiementc.service';

@Component({
  selector: 'app-bc',
  templateUrl: './bc.component.html',
  styleUrls: ['./bc.component.css']
})
export class BcComponent implements OnInit {
  facture:any;
  data:any;
  p:any;
  constructor(private paiementService:PaiementcService) { }
  ngOnInit(): void {
    this.getclientp();
  }
  getclientp(){
    this.paiementService.getData().subscribe(res=>{
    this.p=res;
     });
    }
}
