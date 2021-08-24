import { Component, OnInit } from '@angular/core';
import { bonlService } from 'src/app/services/bonl.service';

@Component({
  selector: 'app-bon-livraison',
  templateUrl: './bon-livraison.component.html',
  styleUrls: ['./bon-livraison.component.css']
})
export class BonLivraisonComponent implements OnInit {
  bonl: any;
 constructor(private bonlservice:bonlService) { }
  ngOnInit(): void {
    this.getbonlivraison();
  }
  getbonlivraison(){
   this.bonlservice.getData().subscribe(res=>{
   this.bonl=res;
   });
}
}
