import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { clientModel } from 'src/app/models/clients.model';
import { ClientsService } from 'src/app/services/clients.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  clients:any;
  client = new clientModel();
  constructor(private clientService:ClientsService,private route:ActivatedRoute,private router:Router,private toastr: ToastrService) {}
  ngOnInit(): void {
    this.getClientsData()
    this.client.type="particulier";
    this.client.civilite="M";
    this.client.email="emxple@exemple.com";
    this.client.raisonsociale=0;
    this.client.matfiscale=0;
  }
  getClientsData(){
    this.clientService.getClientData().subscribe(res=>{
    this.clients=res;
    });
  }
  insertClientData(){
    this.clientService.insertClientData(this.client).subscribe(res=>{
      this.router.navigate(['rvente/Clients']);
      this.toastr.success('avec succès', 'Client ajouté :)');
      });
  }
  annuler(){
    this.router.navigate(['rvente/Clients']);
    this.toastr.error('', 'Annulation');
  }
}
