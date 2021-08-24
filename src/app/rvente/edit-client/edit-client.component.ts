import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { clientModel } from 'src/app/models/clients.model';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id:any;
  data:any;
  client =new clientModel();
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
updateClient(){
 this.clientService.updateClientData(this.id,this.client).subscribe(res=>{
  this.router.navigate(['rvente/Clients']);
  this.toastr.success('avec succès', 'Client modifé :)');
 });
}
deleteClient(id: any){
  this.clientService.deleteClient(id).subscribe(res=>{
    this.router.navigate(['rvente/Clients']);
    this.toastr.success('', 'Client supprimé :)');
    });
}
annuler(){
  this.router.navigate(['rvente/Clients']);
  this.toastr.error('', 'Annulation');
}
}
