import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class bonsService {
  constructor(private http:HttpClient) { }
}
