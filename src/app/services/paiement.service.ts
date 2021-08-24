import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paiement } from '../models/paiement';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/multipart/form-data'})
};
@Injectable({
  providedIn: 'root'
})
export class PaiementService {
  private url = 'http://localhost:8000/api/paiements/';
  constructor( private http : HttpClient ) { }
  getData(){
    return this.http.get('http://127.0.0.1:8000/api/paiements');
  }
  getFactureById(id:any){
    return this.http.get('http://127.0.0.1:8000/api/paiements/'+id);
  }
  insertData(data: Paiement){
    return this.http.post('http://127.0.0.1:8000/api/paiements/',data);
  }
  updateData(id:any,data: Paiement){
    return this.http.put('http://127.0.0.1:8000/api/paiements/'+id,data);
  }
  deleteData(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/paiements/'+id);
  }
  getPaiemenetsOfFacture(id:any){
    return this.http.get<Paiement[]>('http://127.0.0.1:8000/api/paiement/facture/'+id);
  }
  getSUmRetardAPaye():Observable<any>{
    return this.http.get('http://localhost:8000/api/resteretard/');
  }
}
