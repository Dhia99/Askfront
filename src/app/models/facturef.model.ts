import { ListProduct } from "./Listproduct.model";
import { productModel } from "./product.model";

export class FournisseurFacture {
    Ref_Facture:any="";
    quantite_entre:any="";
    Total_HT:any="";
    Montant_TVA:any="";
    Montant_TTC:any="";
    Etat:any="";
    date_echeance:any="";
    date_creation:any="";
    Libelle:any="";
    id_fournisseur:any="";
    note:any="";
    Timbre_fiscale:any="";
    id_product: any="";
    Nom_fournisseur:any="";
    Taxe_Applique:any="";
    product: productModel[]=[];
    produit: productModel=new productModel();
    ListProduct: ListProduct[]=[];
    id: any;
}
