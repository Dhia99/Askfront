import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FournisseurModel } from '../models/fournisseur.model';
@Injectable({
  providedIn: 'root'
})
export class FournisseursService {
  constructor(private http:HttpClient) { }
  getfournisseurData(){
    return this.http.get('http://127.0.0.1:8000/api/rachat/fournisseurs');
  }
  getfournisseurById(id:any){
    return this.http.get('http://127.0.0.1:8000/api/rachat/fournisseur/'+id);
  }
  insertfournisseurData(data:FournisseurModel){
    return this.http.post('http://127.0.0.1:8000/api/rachat/addfournisseur',data);
  }
  updatefounisseurData(id:any,data:FournisseurModel){
    return this.http.put('http://127.0.0.1:8000/api/rachat/updatefournisseur/'+id,data);
  }
  deletefournisseur(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/rachat/deletefournisseur/'+id);
  }
  nbfn(){
    return this.http.get('http://127.0.0.1:8000/api/rachat/nbfn');
  }
}
