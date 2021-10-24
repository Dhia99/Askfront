import { Component, OnInit } from '@angular/core';
import { dashboardService } from 'src/app/services/dashboard.service';
import { FacturesService } from 'src/app/services/facturef.service';
import { FournisseursService } from 'src/app/services/fournisseurs.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  nbprod:any;
  nbfn:any;
  fournisseur:any;
  nf:any;
  facturef:any
  Net:any;
  stat:any;
  constructor(private ProductService:ProductService,private fournisseurService:FournisseursService,private factureService: FacturesService,private dashboardservice:dashboardService) { }
  ngOnInit(): void {
    this.get();
    this.getfacturefdata();
    this.statva();
  }
  get(){
    this.ProductService.getNumberProduct().subscribe(a=>{
    this.nbprod=a;
  });
}
getfacturefdata(){
  this.factureService.getData().subscribe(res=>{
  this.facturef=res;
  console.log("####",this.facturef);
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
statva(){
  this.dashboardservice.getstatva().subscribe(res=>{
  this.stat=res;
  })
}
}
