import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FacturesService } from 'src/app/services/facturef.service';
declare var export_pdf:any;
@Component({
  selector: 'app-factfdetails',
  templateUrl: './factfdetails.component.html',
  styleUrls: ['./factfdetails.component.css']
})
export class FactfdetailsComponent implements OnInit {
  facture: any;
  id: any;
  Net:any=0;
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private factfService:FacturesService) { }
  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getfactfdetails();
  }
  export(){
    export_pdf();
  }
  getfactfdetails(){
  this.factfService.getFactureById(this.id).subscribe(res =>{
  this.facture=res;
  this.Net=this.facture.Montant_TTC+this.facture.Timbre_fiscale;
  });
  }
  annuler(){
    this.router.navigate(['rachat/achat/facturef']);
  }
}
