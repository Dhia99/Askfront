import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FournisseurFacture } from '../models/facturef.model';
@Injectable({
  providedIn: 'root'
})
export class FacturesService {
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('http://127.0.0.1:8000/api/facturef');
  }
  getFactureById(id:any){
    return this.http.get('http://127.0.0.1:8000/api/facturef/'+id);
  }
  insertData(data: FournisseurFacture){
    return this.http.post('http://127.0.0.1:8000/api/facturef/',data);
  }
  updateData(id:any,data: FournisseurFacture){
    return this.http.put('http://127.0.0.1:8000/api/facturef/'+id,data);
  }
  deleteData(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/facturef/'+id);
  }
  nbrff(){
    return this.http.get('http://127.0.0.1:8000/api/facturef/nbff');
  }
}
