import { Component, OnInit } from '@angular/core';
import { Produit2 } from '../Models/Produit2';
import { VendorServicesService } from '../_services/vendor-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
  produit?:Produit2[];
  constructor(private vendorServ:VendorServicesService){}
  ngOnInit(): void {
    this.vendorServ.getProduit().subscribe({
      next:(data)=>{
         this.produit=data;
         console.log(data);
        
      }

    }) 
  }

}
