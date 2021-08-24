import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addchtr',
  templateUrl: './addchtr.component.html',
  styleUrls: ['./addchtr.component.css']
})
export class AddchtrComponent implements OnInit {
  val:any="Reçu";
  name: string="Fournisseur";

  constructor() { }

  ngOnInit(): void {
  }
  gettype(event:any){
    this.val = event.target.value;
    if (this.val==="Reçu"){
        this.name="Client"
    }
    if(this.val==="Émis"){
      this.name="Fournisseur"
    }
  }

}
