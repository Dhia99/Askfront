import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Devismodel } from 'src/app/models/devis.model';
import { devisService } from 'src/app/services/devis.service';
@Component({
  selector: 'app-editdevis',
  templateUrl: './editdevis.component.html',
  styleUrls: ['./editdevis.component.css']
})
export class EditdevisComponent implements OnInit {
id:any;
data: any;
Net:any
devis= new Devismodel();
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private devisService:devisService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getdevis();
  }
  getdevis(){
    this.devisService.getdevisById(this.id).subscribe(res=>{
    this.data=res;
    this.devis=this.data;
    this.Net=0;
    this.Net=this.devis.Montant_TTC+this.devis.Timbre_fiscale;
    })
  }
  updatedevis(){
    this.devisService.updateData(this.id,this.devis).subscribe(res=>{
      this.router.navigate(['rvente/vente/Devis']);
      this.toastr.success('avec succès', 'Devis modifié');
    });
  }
  annuler(){
    this.router.navigate(['rvente/vente/Devis']);
    this.toastr.error('', 'Annulation');
  }

}
