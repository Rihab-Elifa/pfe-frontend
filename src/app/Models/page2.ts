import { File } from "./File";
import { Produit } from "./Produit";

export class page2{

    id!: string;
    title!: string;
    address!: string;
    email!: string;
    city!: string;
    phone!: number;
    activity!:string;
    postalCode!: number;
    p!: Produit[];
    imageProfile!:File ;
    imageCouverture!:File;
}