import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addcommf',
  templateUrl: './addcommf.component.html',
  styleUrls: ['./addcommf.component.css']
})
export class AddcommfComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  annuler(){
    this.router.navigate(['rachat/achat/commf']);
    this.toastr.error('', 'Annulation');
  }
}
