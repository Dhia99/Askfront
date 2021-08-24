import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { devisService } from 'src/app/services/devis.service';
@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {
devis:any;
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private devisService:devisService) { }

  ngOnInit(): void {
    this.getdevisdata();
  }
getdevisdata(){
  this.devisService.getData().subscribe(res=>{
    this.devis=res;
  })
}
}
