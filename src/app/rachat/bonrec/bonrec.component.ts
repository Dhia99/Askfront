import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BonrecService } from 'src/app/services/bonrec.service';
import { FournisseursService } from 'src/app/services/fournisseurs.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-bonrec',
  templateUrl: './bonrec.component.html',
  styleUrls: ['./bonrec.component.css']
})
export class BonrecComponent implements OnInit {
  bondereception:any
  ht: any;
  ttc:any;
  areg:any;
  Net:any=0;

  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private BonrecService: BonrecService,private productService:ProductService,private four:FournisseursService) { }

  ngOnInit(): void {
    this.getfacturefdata();
  }
  getfacturefdata(){
    this.BonrecService.getData().subscribe(res=>{
    this.bondereception=res;
    this.ht=0;
    this.ttc=0;
    this.areg=0;
    for (var i = 0;i <this.bondereception.length; i++) {
     this.ht+=this.bondereception[i].Total_HT;
     this.ttc+=this.bondereception[i].Montant_TTC;
     this.Net+=this.bondereception[i].facture;
     }
    });
 }

}
