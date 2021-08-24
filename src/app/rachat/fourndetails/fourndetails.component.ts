import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FournisseursService } from 'src/app/services/fournisseurs.service';

@Component({
  selector: 'app-fourndetails',
  templateUrl: './fourndetails.component.html',
  styleUrls: ['./fourndetails.component.css']
})
export class FourndetailsComponent implements OnInit {
  fournisseur:any;
  id:any;
  data:any;
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private fournisseurService:FournisseursService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getfournisseurData();
    console.log(this.id)
    console.log(this.fournisseur);
  }
  getfournisseurData(){
    this.fournisseurService.getfournisseurById(this.id).subscribe(res=>{
    this.fournisseur=res;
    });
  }
  deleteProduct(id:any){
    this.fournisseurService.deletefournisseur(id).subscribe(res=>{
    this.router.navigate(['rachat/fournisseur']);
    this.toastr.warning('avec succès', 'Fournisseur supprimé :)');
      });
  }
  annuler(){
    this.router.navigate(['rachat/fournisseur']);
  }
}
