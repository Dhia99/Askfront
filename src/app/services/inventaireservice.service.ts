import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inventairemodel } from '../models/inventaire.model';

@Injectable({
  providedIn: 'root'
})
export class InventaireserviceService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('http://127.0.0.1:8000/api/inventaire');
  }
  getFactureById(id:any){
    return this.http.get('http://127.0.0.1:8000/api/inventaire/'+id);
  }
  insertData(data: Inventairemodel){
    return this.http.post('http://127.0.0.1:8000/api/inventaire/',data);
  }
  updateData(id:any,data: Inventairemodel){
    return this.http.put('http://127.0.0.1:8000/api/inventaire/'+id,data);
  }
  deleteData(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/inventaire/'+id);
  }
}
