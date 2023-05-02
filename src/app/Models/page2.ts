import { Activity } from "./Activity";
import { File } from "./File";
import { Produit } from "./Produit";
import { Produit2 } from "./Produit2";
import { Region } from "./Region";

export class page2{

    id!: string;
    title!: string;
    address!: string;
    email!: string;
    city!: string;
    phone!: number;
    activity!:Activity;
    postalCode!: number;
    region!:Region;
    imageProfile!:File;
    imageCouverture!:File;
}