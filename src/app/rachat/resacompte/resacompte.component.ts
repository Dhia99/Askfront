import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-resacompte',
  templateUrl: './resacompte.component.html',
  styleUrls: ['./resacompte.component.css']
})
export class ResacompteComponent implements OnInit {
  token:any;
  userData:any;
  email:any;
  name:any
  password: any;
    constructor() { }
    ngOnInit(): void {
      this.token = localStorage.getItem('token');
      this.userData=jwt_decode(this.token);
      this.email=this.userData.email;
      this.name=this.userData.name;
      this.password=this.userData.password;
      console.log(this.token);
      console.log(this.userData);
      console.log(this.userData.name);
    }
}
