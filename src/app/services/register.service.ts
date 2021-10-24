import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {

  constructor(private http:HttpClient) { }
  registerUser(data: any){
    return this.http.post('http://127.0.0.1:8000/api/register',data);
  }
  loginUser(data: any){
    return this.http.post('http://127.0.0.1:8000/api/login',data);
  }
}
