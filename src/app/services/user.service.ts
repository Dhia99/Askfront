import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
   User(data: any){
    return this.http.get('http://127.0.0.1:8081/api/resp',data);
  }
}
