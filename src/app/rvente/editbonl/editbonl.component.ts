import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { bonlService } from 'src/app/services/bonl.service';

@Component({
  selector: 'app-editbonl',
  templateUrl: './editbonl.component.html',
  styleUrls: ['./editbonl.component.css']
})
export class EditbonlComponent implements OnInit {
id:any;
data:any;
bonl:any;
Net:any;

  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private bonlservice:bonlService) { }
  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getbonl();
  }
  getbonl(){
    this.bonlservice.getcommclById(this.id).subscribe(res=>{
    this.data=res;
    this.bonl=this.data;
    this.Net=0;
    this.Net=this.bonl.Montant_TTC+this.bonl.Timbre_fiscale;
  })
}
updatecommcl(){
  this.bonlservice.updateData(this.id,this.data).subscribe(res=>{
  this.router.navigate(['rvente/vente/Bonlivraison']);
  this.toastr.success('avec succès', 'Bon Livraison modifiée');
  })
}
annuler(){
  this.router.navigate(['rvente/vente/Bonlivraison']);
  this.toastr.error('', 'Annulation');
}
}
