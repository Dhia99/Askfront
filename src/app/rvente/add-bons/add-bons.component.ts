import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-bons',
  templateUrl: './add-bons.component.html',
  styleUrls: ['./add-bons.component.css']
})
export class AddBonsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  annuler(){
    this.router.navigate(['rvente/vente/Bonsortie']);
    this.toastr.error('', 'Annulation');
  }
}
