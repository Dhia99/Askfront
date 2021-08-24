import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FournisseursService } from 'src/app/services/fournisseurs.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  fournisseurs: any;
 constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private fournisseurService:FournisseursService) { }

  ngOnInit(): void {
    this.getFournisseurssData();
  }
  getFournisseurssData(){
    this.fournisseurService.getfournisseurData().subscribe(res=>{
    this.fournisseurs=res;
    return res;
    });
  }
  deleteFournisseur(id: any){
    this.fournisseurService.deletefournisseur(id).subscribe(res=>{
      this.toastr.success('', 'Fournisseurs supprimé :)');
      this.getFournisseurssData();
      });
  }
}
