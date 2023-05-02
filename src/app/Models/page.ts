import { Activity } from "./Activity";
import { Produit } from "./Produit";
import { Region } from "./Region";

export class page{

    id!: string;
    title!: string;
    address!: string;
    email!: string;
    phone!: number;
    activity!:Activity;
    postalCode!: number;
    region!:Region;
   
    //imageProfile!: File;
    //imageCouverture!: File;
}