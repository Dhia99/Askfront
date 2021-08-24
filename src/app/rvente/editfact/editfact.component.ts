import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Facturemodel } from 'src/app/models/Facture.model';
import { ClientsService } from 'src/app/services/clients.service';
import { factureService } from 'src/app/services/facture.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-editfact',
  templateUrl: './editfact.component.html',
  styleUrls: ['./editfact.component.css']
})
export class EditfactComponent implements OnInit {
id:any;
facture = new Facturemodel();
Net:any;
data: any;
constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private productService:ProductService,private clientservice:ClientsService,private factService: factureService) { }

  ngOnInit(): void {
  this.id=this.route.snapshot.params.id;
  this.getfacture();
  }
  getfacture(){
    this.factService.getFactureById(this.id).subscribe(res=>{
    this.data=res;
    this.facture=this.data;
    this.Net=0;
    this.Net=this.facture.Montant_TTC+this.facture.Timbre_fiscale;
    })
  }
  updatefacture(){
    this.factService.updateData(this.id,this.facture).subscribe(res=>{
    });
  }
  annuler(){
    this.router.navigate(['rvente/vente/Facture']);
    this.toastr.error('', 'Annulation');
  }

}
