import { Component, OnInit } from '@angular/core';
import { PaiementService } from 'src/app/services/paiement.service';

@Component({
  selector: 'app-bf',
  templateUrl: './bf.component.html',
  styleUrls: ['./bf.component.css']
})
export class BfComponent implements OnInit {
p:any;
  constructor(private paiementService:PaiementService) { }

  ngOnInit(): void {
    this.getfournisseurp();
  }
  getfournisseurp(){
    this.paiementService.getData().subscribe(res=>{
    this.p=res;
     });
    }

}
