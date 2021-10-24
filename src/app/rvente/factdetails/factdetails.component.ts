import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientsService } from 'src/app/services/clients.service';
import { factureService } from 'src/app/services/facture.service';
import { ProductService } from 'src/app/services/product.service';
declare var export_pdf:any;
@Component({
  selector: 'app-factdetails',
  templateUrl: './factdetails.component.html',
  styleUrls: ['./factdetails.component.css']
})
export class FactdetailsComponent implements OnInit {

constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private productService:ProductService,private clientservice:ClientsService,private factService: factureService) { }
id:any;
facture: any;
Net:any;
  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getfacture();
  }
  export(){
    export_pdf();
  }
  getfacture(){
    this.factService.getFactureById(this.id).subscribe(res=>{
      this.facture=res;
      this.Net=0;
      this.Net=this.facture.Montant_TTC+this.facture.Timbre_fiscale;
    })
  }
  annuler(){
    this.router.navigate(['rvente/vente/Facture']);
  }
}
