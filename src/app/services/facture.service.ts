import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facturemodel } from '../models/Facture.model';
@Injectable({
  providedIn: 'root'
})
export class factureService {
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('http://127.0.0.1:8000/api/facture');
  }
  getFactureById(id:any){
    return this.http.get('http://127.0.0.1:8000/api/facture/'+id);
  }
  insertData(data: Facturemodel){
    return this.http.post('http://127.0.0.1:8000/api/facture/',data);
  }
  updateData(id:any,data: Facturemodel){
    return this.http.put('http://127.0.0.1:8000/api/facture/'+id,data);
  }
  deleteData(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/facture/'+id);
  }
  nbrf(){
    return this.http.get('http://127.0.0.1:8000/api/facture');
  }
}

