import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { clientModel } from '../models/clients.model';



@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  constructor(private http:HttpClient) { }
  getClientData(){
    return this.http.get('http://127.0.0.1:8000/api/rvente/clients');
  }
  getClientById(id:any){
    return this.http.get('http://127.0.0.1:8000/api/rvente/client/'+id);
  }
  insertClientData(data:clientModel){
    return this.http.post('http://127.0.0.1:8000/api/rvente/addClient',data);
  }
  updateClientData(id:any,data:clientModel){
    return this.http.put('http://127.0.0.1:8000/api/rvente/updateClient/'+id,data);
  }
  deleteClient(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/rvente/deleteClient/'+id);
  }
  nbclt(){
    return this.http.get('http://127.0.0.1:8000/api/rvente/nbclt');
  }
}


