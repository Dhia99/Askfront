import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id:any;
  data:any;
  client:any;
  constructor(private clientService:ClientsService ,private route:ActivatedRoute,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getClientData();
  }
  getClientData(){
    this.clientService.getClientById(this.id).subscribe(res=>{
      this.data=res;
      this.client=this.data;
    });
  }
  deleteClient(id: any){
    this.clientService.deleteClient(id).subscribe(res=>{
      this.router.navigate(['rvente/Clients']);
      this.toastr.warning('avec succès', 'Client supprimé :)');
      });
  }
  annuler(){
    this.router.navigate(['rvente/Clients']);
  }
}
