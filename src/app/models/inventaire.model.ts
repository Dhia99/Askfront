import { productModel } from "./product.model";
import { productInv } from "./productin.model";

export class Inventairemodel {
  id: any;
  Refinv:any="";
  id_product: any="";
  Libelle:any="";
  date_creation:any="";
  note:any="";
  Enstock:any="";
  quanaj:any="";
  product: productModel[]=[];
  productInv: productInv[]=[];
}
