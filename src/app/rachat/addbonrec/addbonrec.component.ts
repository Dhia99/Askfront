import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Bondereception } from 'src/app/models/bondereception.model';
import { FournisseurFacture } from 'src/app/models/facturef.model';
import { FournisseurModel } from 'src/app/models/fournisseur.model';
import { ListProduct } from 'src/app/models/Listproduct.model';
import { Listproductb } from 'src/app/models/listproductb.model';
import { BonrecService } from 'src/app/services/bonrec.service';
import { FacturesService } from 'src/app/services/facturef.service';
import { FournisseursService } from 'src/app/services/fournisseurs.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addbonrec',
  templateUrl: './addbonrec.component.html',
  styleUrls: ['./addbonrec.component.css']
})
export class AddbonrecComponent implements OnInit {
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
annuler(){
  this.router.navigate(['rachat/achat/bonrcp']);
    this.toastr.error('', 'Annulation');
}
  }


