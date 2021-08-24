import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { clientModel } from 'src/app/models/clients.model';
import { ClientsService } from 'src/app/services/clients.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients:any;
  client = new clientModel();
constructor(private clientService:ClientsService,private toastr: ToastrService) { }
ngOnInit(): void {
  this.getClientsData();
}
getClientsData(){
  this.clientService.getClientData().subscribe(res=>{
  this.clients=res;
  return res;
  });
}
deleteClient(id: any){
  this.clientService.deleteClient(id).subscribe(res=>{
    this.toastr.success('', 'Client supprimé :)');
    this.getClientsData();
    });
}
}
