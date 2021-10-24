import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientsService } from 'src/app/services/clients.service';
import { commandeclService } from 'src/app/services/comc.service';
import { ProductService } from 'src/app/services/product.service';
declare var export_pdf:any;
@Component({
  selector: 'app-commdetails',
  templateUrl: './commdetails.component.html',
  styleUrls: ['./commdetails.component.css']
})
export class CommdetailsComponent implements OnInit {
commcl:any;
id:any;
Net:any;
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private productService:ProductService,private clientservice:ClientsService,private cmdService: commandeclService) { }
  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getcommc();
  }
  export(){
    export_pdf();
  }
  getcommc(){
    this.cmdService.getcommclById(this.id).subscribe(res=>{
    this.commcl=res;
    this.Net=0;
    this.Net=this.commcl.Montant_TTC+this.commcl.Timbre_fiscale;
    })
  }
  annuler(){
    this.router.navigate(['rvente/vente/CommandeCl']);
   }
}
