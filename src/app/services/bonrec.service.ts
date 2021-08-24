import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bondereception } from '../models/bondereception.model';
@Injectable({
  providedIn: 'root'
})
export class BonrecService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('http://127.0.0.1:8000/api/bondereceptions');
  }
  getFactureById(id:any){
    return this.http.get('http://127.0.0.1:8000/api/bondereceptions/'+id);
  }
  insertData(data: Bondereception){
    return this.http.post('http://127.0.0.1:8000/api/bondereceptions/',data);
  }
  updateData(id:any,data: Bondereception){
    return this.http.put('http://127.0.0.1:8000/api/bondereceptions/'+id,data);
  }
  deleteData(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/bondereceptions/'+id);
  }}
