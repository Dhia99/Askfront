import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/multipart/form-data'})
};
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http : HttpClient) { }

  getEcheance(){
    return this.http.get('http://127.0.0.1:8000/api/notificationecheance');
  }
  getEcheancec(){
    return this.http.get('http://127.0.0.1:8000/api/notificationecheancec');
  }

  getProduit(){
    return this.http.get('http://127.0.0.1:8000/api/notificationproduit');
  }
}
