import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../Models/Produit';
import { Categorie } from '../Models/Categorie';

import { VendorServicesService } from '../_services/vendor-services.service';
import { CategorieService } from '../_services/categorie.service';
import { Article } from '../Models/Article';
import { page2 } from '../Models/page2';

import { Article2 } from '../Models/Article2';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss']
})
export class AddProduitComponent implements OnInit {
 
  id!:string;
  @Input() article:Article2={
    id: '',
    nom: '',
    description: '',
    prix: 0,
    nbstock: 0,
  
  
  }
  image!:File;
  constructor(private vendorServ:VendorServicesService,private categoryService:CategorieService){}
  ngOnInit(): void {
    this.categoryService.getAll()
      .subscribe({
        next: (data) => {
         
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  ajouterProduit(): void {
    this.vendorServ.ajouterProduit(this.id, this.article,this.image)
      .subscribe(resp => {
        
        
        console.log('Produit ajoutée avec succès')
      });
  }
  onProfilImageSelected(event: any): void {
    this.image= event.target.files[0];
  }
  

}

