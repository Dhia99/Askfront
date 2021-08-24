import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { operationModel } from '../models/operation.model';
@Injectable({
  providedIn: 'root'
})
export class operationService {
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('http://127.0.0.1:8000/api/rcomf/operations');
  }
  getdepenseById(id:any){
    return this.http.get('http://127.0.0.1:8000/api/rcomf/operation/'+id);
  }
  insertData(data:operationModel){
    return this.http.post('http://127.0.0.1:8000/api/rcomf/addoperation',data);
  }
  updateData(id:any,data:operationModel){
    return this.http.put('http://127.0.0.1:8000/api/rcomf/updateopeartion/'+id,data);
  }
  deleteData(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/rcomf/deleteoperation/'+id);
  }
}