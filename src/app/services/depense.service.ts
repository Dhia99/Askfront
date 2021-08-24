import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { depenseModel } from '../models/depense.model';
@Injectable({
  providedIn: 'root'
})
export class depenseService {
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('http://127.0.0.1:8000/api/rcomf/depenses');
  }
  getdepenseById(id:any){
    return this.http.get('http://127.0.0.1:8000/api/rcomf/depense/'+id);
  }
  insertData(data:depenseModel){
    return this.http.post('http://127.0.0.1:8000/api/rcomf/adddepense',data);
  }
  updateData(id:any,data:depenseModel){
    return this.http.put('http://127.0.0.1:8000/api/rcomf/updatedepense/'+id,data);
  }
  deleteData(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/rcomf/deletedepense/'+id);
  }
}
