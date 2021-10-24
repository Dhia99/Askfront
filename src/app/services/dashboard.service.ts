import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class dashboardService {
  constructor(private http:HttpClient) { }
  getstatva(){
    return this.http.get('http://127.0.0.1:8000/api/dashbord');
  }
  getstatf(){
    return this.http.get('http://127.0.0.1:8000/api/dashbordfacture');
  }
}
