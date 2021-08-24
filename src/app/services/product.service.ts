import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('http://127.0.0.1:8000/api/rvente/products');
  }
  getProductById(id:any){
    return this.http.get('http://127.0.0.1:8000/api/rvente/product/'+id);
  }
  insertData(data: productModel){
    return this.http.post('http://127.0.0.1:8000/api/rvente/addProduct',data);
  }
  updateData(id:any,data: productModel){
    return this.http.put('http://127.0.0.1:8000/api/rvente/updateProduct/'+id,data);
  }
  deleteData(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/rvente/deleteProduct/'+id);
  }
 nbprod(){
    return this.http.get('http://127.0.0.1:8000/api/rvente/nbprod');
  } 

  getNumberProduct(){
    return this.http.get('http://127.0.0.1:8000/api/calcul');

  }

}
