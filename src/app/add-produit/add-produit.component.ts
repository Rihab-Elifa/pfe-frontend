import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../Models/Produit';
import { Categorie } from '../Models/Categorie';

import { VendorServicesService } from '../_services/vendor-services.service';
import { CategorieService } from '../_services/categorie.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss']
})
export class AddProduitComponent implements OnInit {
  categorie?:Categorie[];
  id!:string;
  @Input() produit:Produit={
    id: '',
    name: '',
    description: '',
    prix: 0,
    stock: 0,
    c: new Categorie
  }
  image!:File;
  constructor(private vendorServ:VendorServicesService,private categoryService:CategorieService){}
  ngOnInit(): void {
    this.categoryService.getAll()
      .subscribe({
        next: (data) => {
          this.categorie= data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  ajouterProduit(): void {
    this.vendorServ.ajouterProduit(this.id, this.produit,this.image)
      .subscribe(resp => {
        
        
        console.log('Produit ajoutée avec succès')
      });
  }
  onProfilImageSelected(event: any): void {
    this.image= event.target.files[0];
  }
  

}

