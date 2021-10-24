import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { devisService } from 'src/app/services/devis.service';
declare var export_pdf:any;
@Component({
  selector: 'app-devisdetails',
  templateUrl: './devisdetails.component.html',
  styleUrls: ['./devisdetails.component.css']
})
export class DevisdetailsComponent implements OnInit {
id:any;
data:any;
Net:any;
devis:any;
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private devisService:devisService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getdevis();
  }
  export(){
    export_pdf();
  }
  getdevis(){
    this.devisService.getdevisById(this.id).subscribe(res=>{
    this.data=res;
    this.devis=this.data;
    this.Net=0;
    this.Net=this.devis.Montant_TTC+this.devis.Timbre_fiscale;
    })
  }
  annuler(){
    this.router.navigate(['rvente/vente/Devis']);
  }
}
