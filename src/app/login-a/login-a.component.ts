import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import {RegisterLoginService} from '../services/register.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-a',
  templateUrl: './login-a.component.html',
  styleUrls: ['./login-a.component.css']
})
export class LoginAComponent implements OnInit {
  form:FormGroup | any;
  submitted:false | any;
  data:any;
  token:any;
  constructor(private loginService:RegisterLoginService,private toastr: ToastrService,private formBuilder:FormBuilder,private router:Router) { }
  loginForm(){
    this.form=this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
   })
  }
  ngOnInit(): void {
    this.loginForm();
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    this.submitted=true;
    if(this.form.invalid){
      return;
    }
    this.loginService.loginUser(this.form.value).subscribe(res =>{
      this.data = res;
      //console.log(res);
      if(this.data.status ===1){
        this.token=this.data.data.token;
        localStorage.setItem('token', this.token);
        this.router.navigate(['rachat']);
        this.toastr.success(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
          timeOut:2000,
          progressBar:true
        });
      }else if(this.data.status===0){
        this.toastr.error(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
          timeOut:2000,
          progressBar:true
        });
      }
    });
  }
}
