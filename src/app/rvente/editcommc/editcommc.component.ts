import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Commclmodel } from 'src/app/models/commcl.model';
import { ClientsService } from 'src/app/services/clients.service';
import { commandeclService } from 'src/app/services/comc.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-editcommc',
  templateUrl: './editcommc.component.html',
  styleUrls: ['./editcommc.component.css']
})
export class EditcommcComponent implements OnInit {
  id:any;
  data: any;
  Net:any
  commcl= new Commclmodel();
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private productService:ProductService,private clientservice:ClientsService,private cmdService: commandeclService) { }
  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getcommc();
  }
   getcommc(){
     this.cmdService.getcommclById(this.id).subscribe(res=>{
     this.data=res;
     this.commcl=this.data;
     this.Net=0;
     this.Net=this.commcl.Montant_TTC+this.commcl.Timbre_fiscale;
     })
   }
   updatecommcl(){
     this.cmdService.updateData(this.id,this.data).subscribe(res=>{
      this.router.navigate(['rvente/vente/CommandeCl']);
      this.toastr.success('avec succès', 'Commande modifiée');
     })
   }
   annuler(){
    this.router.navigate(['rvente/vente/CommandeCl']);
    this.toastr.error('', 'Annulation');
   }
}
