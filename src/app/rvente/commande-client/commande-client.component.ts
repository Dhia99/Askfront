import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientsService } from 'src/app/services/clients.service';
import { commandeclService } from 'src/app/services/comc.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-commande-client',
  templateUrl: './commande-client.component.html',
  styleUrls: ['./commande-client.component.css']
})
export class CommandeClientComponent implements OnInit {
comm:any;
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private productService:ProductService,private clientservice:ClientsService,private cmdService: commandeclService) { }

  ngOnInit(): void {
    this.getcommandes();
  }
getcommandes(){
  this.cmdService.getData().subscribe(res=>{
    this.comm=res;
  })
}
}
