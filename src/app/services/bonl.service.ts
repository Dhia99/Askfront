import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bonlivraisonmodel } from '../models/bonlivraison.model';
@Injectable({
  providedIn: 'root'
})
export class bonlService {
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('http://127.0.0.1:8000/api/bonlivraison');
  }
  getcommclById(id:any){
    return this.http.get('http://127.0.0.1:8000/api/bonlivraison/'+id);
  }
  insertData(data: Bonlivraisonmodel){
    return this.http.post('http://127.0.0.1:8000/api/bonlivraison/',data);
  }
  updateData(id:any,data: Bonlivraisonmodel){
    return this.http.put('http://127.0.0.1:8000/api/bonlivraison/'+id,data);
  }
  deleteData(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/bonlivraison/'+id);
  }
}
