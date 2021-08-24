import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private router:Router,private toastr: ToastrService) { }
  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['Login']);
    this.toastr.success('', 'Déconnexion effectuée');
  }

}
