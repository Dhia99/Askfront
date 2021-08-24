import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Devismodel } from '../models/devis.model';
@Injectable({
  providedIn: 'root'
})
export class devisService {
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('http://127.0.0.1:8000/api/devis');
  }
  getdevisById(id:any){
    return this.http.get('http://127.0.0.1:8000/api/devis/'+id);
  }
  insertData(data: Devismodel){
    return this.http.post('http://127.0.0.1:8000/api/devis/',data);
  }
  updateData(id:any,data: Devismodel){
    return this.http.put('http://127.0.0.1:8000/api/devis/'+id,data);
  }
  deleteData(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/devis/'+id);
  }
}
