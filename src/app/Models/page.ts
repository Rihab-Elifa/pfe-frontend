import { Produit } from "./Produit";

export class page{

    id!: string;
    title!: string;
    address!: string;
    email!: string;
    city!: string;
    phone!: number;
    activity!:string;
    postalCode!: number;
    p!: Produit[];
    //imageProfile!: File;
    //imageCouverture!: File;
}