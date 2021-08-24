import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paiementc } from '../models/paiementc';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/multipart/form-data'})
};


@Injectable({
  providedIn: 'root'
})
export class PaiementcService {
  private url = 'http://localhost:8000/api/paiementcs/';
  constructor( private http : HttpClient ) { }
  getData(){
    return this.http.get('http://127.0.0.1:8000/api/paiementcs');
  }
  getFactureById(id:any){
    return this.http.get('http://127.0.0.1:8000/api/paiementcs/'+id);
  }
  insertData(data: Paiementc){
    return this.http.post('http://127.0.0.1:8000/api/paiementcs/',data);
  }
  updateData(id:any,data: Paiementc){
    return this.http.put('http://127.0.0.1:8000/api/paiementcs/'+id,data);
  }
  deleteData(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/paiementcs/'+id);
  }
  getPaiemenetsOfFacture(id:any){
    return this.http.get<Paiementc[]>('http://127.0.0.1:8000/api/paiementc/facturec/'+id);
  }
  getSUmRetardAPaye():Observable<any>{
    return this.http.get('http://localhost:8000/api/resteretardc/');
  }
}
