import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FournisseurModel } from 'src/app/models/fournisseur.model';
import { FournisseursService } from 'src/app/services/fournisseurs.service';

@Component({
  selector: 'app-editfourn',
  templateUrl: './editfourn.component.html',
  styleUrls: ['./editfourn.component.css']
})
export class EditfournComponent implements OnInit {
  data: any;
  fournisseur=new FournisseurModel();
  id:any;
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private fournisseurService:FournisseursService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getFournisseurData();
  }
  getFournisseurData(){
    this.fournisseurService.getfournisseurById(this.id).subscribe(res=>{
    this.data=res;
    this.fournisseur=this.data;
    });
  }
updateFournisseur(){
  this.fournisseurService.updatefounisseurData(this.id,this.fournisseur).subscribe(res=>{
  this.router.navigate(['rachat/fournisseur']);
  this.toastr.success('avec succès', 'Fournisseur modifé :)');
 });
}
deleteFournisseur(id:any){
    this.fournisseurService.deletefournisseur(id).subscribe(res=>{
    this.router.navigate(['rachat/fournisseur']);
    this.toastr.success('', 'Fournisseur supprimé :)');
    });
}
annuler(){
  this.router.navigate(['rachat/fournisseur']);
  this.toastr.error('', 'Annulation');
}
}
