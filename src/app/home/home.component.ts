import { Component, OnInit } from '@angular/core';
import { Produit2 } from '../Models/Produit2';
import { VendorServicesService } from '../_services/vendor-services.service';
import { Article } from '../Models/Article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
  article?:Article[];
  constructor(private vendorServ:VendorServicesService){}
  ngOnInit(): void {
    this.vendorServ.getAllArticle().subscribe({
      next:(data)=>{
         this.article=data;
         console.log(data);
        
      }

    }) 
  }

}
