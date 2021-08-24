import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FacturesService } from 'src/app/services/facturef.service';
//import pdfMake from "pdfmake/build/pdfmake";
//import pdfFonts from "pdfmake/build/vfs_fonts";
//pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-factfdetails',
  templateUrl: './factfdetails.component.html',
  styleUrls: ['./factfdetails.component.css']
})
export class FactfdetailsComponent implements OnInit {
  facture: any;
  id: any;
  Net:any=0;
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private factfService:FacturesService) { }
  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getfactfdetails();
  }
  getfactfdetails(){
  this.factfService.getFactureById(this.id).subscribe(res =>{
  this.facture=res;
  this.Net=this.facture.Montant_TTC+this.facture.Timbre_fiscale;
  });
  }
  annuler(){
    this.router.navigate(['rachat/achat/facturef']);
  }
  generatePDF(action = 'open') {
    let docDefinition = {
      content: [
        {
          text: 'MFV',
          fontSize: 16,
          alignment: 'center',
          color: '#047886'
        },
        {
          text: 'Facture '+this.facture.Ref_Facture,
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: 'skyblue'
        },
        {
          columns: [
            [
              {
                text:'Fournisseur :'+this.facture.Nom_fournisseur,
                bold:true
              },
              { text:'Etat :'+this.facture.Etat,
                bold:true},
            ],
            [
              {text:'Ref-Facture :'+this.facture.Ref_Facture,
              alignment: 'right'
              },
              {
                text:'Creé Le :'+this.facture.date_creation,
                alignment: 'right'
              },
              {
                text:'Note :'+this.facture.note,
                alignment: 'right'
              },
              {
                text:'Délai de payemant : '+this.facture.date_echeance,
                alignment: 'right'
              }
            ],
            [
              {text:'Total HT :'+this.facture.Total_HT,
              alignment: 'right'
              },
              {
                text:'Total TVA:'+this.facture.Montant_TVA,
                alignment: 'right'
              },
              {
                text:'Total TTC:'+this.facture.Montant_TTC,
                alignment: 'right'
              },
              {
                text:'Timbre fiscale :'+this.facture.Timbre_fiscale,
                alignment: 'right'
              },
              {
                text:'NET A PAYER :'+this.Net,
                alignment: 'right'
              }
            ]
          ]
        },
      ],
    };
    if(action==='download'){
    //  pdfMake.createPdf(docDefinition).download();
    }else if(action === 'print'){
    //  pdfMake.createPdf(docDefinition).print();
    }else{
    //  pdfMake.createPdf(docDefinition).open();
    }
  }

}
