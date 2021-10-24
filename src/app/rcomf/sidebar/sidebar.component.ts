import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  token:any;
  userData:any;
  email:any;
  name:any
  constructor() { }
   menu="";
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userData=jwt_decode(this.token);
    this.email=this.userData.email;
    this.name=this.userData.name;
    console.log(this.token);
    console.log(this.userData);
    console.log(this.userData.name);
  }
  activem(menu: any){
    console.log('',menu);
    this.menu=menu;
  }
}
