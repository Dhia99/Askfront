import { ListProductv } from "./Listproductv.model";
import { productModel } from "./product.model";

export class Facturemodel {
    Ref_Facture:any="";
    quantite_entre:any="";
    Total_HT:any="";
    Montant_TVA:any="";
    Montant_TTC:any="";
    Etat:any="";
    date_echeance:any="";
    date_creation:any="";
    Libelle:any="";
    id_client:any="";
    note:any="";
    Timbre_fiscale:any="";
    id_product: any="";
    Nom_client:any="";
    Taxe_Applique:any="";
    product: productModel[]=[];
    produit: productModel=new productModel();
    ListProductv: ListProductv[]=[];
    id: any;
}



