import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { depenseModel } from 'src/app/models/depense.model';
import { depenseService } from 'src/app/services/depense.service';
import { FournisseursService } from 'src/app/services/fournisseurs.service';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-adddep1',
  templateUrl: './adddep1.component.html',
  styleUrls: ['./adddep1.component.css']
})
export class Adddep1Component implements OnInit {
depense = new depenseModel();
f: any;
index_fournisseur: any;
  constructor(private depenseservice:depenseService,private router:Router,private toastr: ToastrService, private four: FournisseursService) { }

  ngOnInit(): void {
    this.getfournisseur();
    this.depense.note='pas de note';
    this.depense.categorie='cat';
    this.depense.montant=0;
    this.depense.type='Traite';
    this.depense.datereg=formatDate(new Date(), 'yyyy-MM-dd', 'en');
  }
  insertData(){
    this.depense.fournisseur = this.f[this.index_fournisseur].NOM
    this.depense.id_fournisseur = this.f[this.index_fournisseur].id
    this.depenseservice.insertData(this.depense).subscribe(res=>{
      this.router.navigate(['rcomf/treso/soldep']);
      this.toastr.success('avec succès', 'Depense ajouté :)');
      });
  }
  getfournisseur() {
    this.four.getfournisseurData().subscribe(res => {
      this.f = res;
    });
  }
  annuler(){
    this.router.navigate(['rcomf/treso/soldep']);
    this.toastr.error('', 'Annulation');
  }

}
