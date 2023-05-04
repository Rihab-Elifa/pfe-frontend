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
  Activity:any=["FOOD","PATISSERIE","MAGAZINE"]
  article?:Article[];
  Local?:Article[];
  center!:any;
  constructor(private vendorServ:VendorServicesService){}
  ngOnInit(): void {
    this.vendorServ.getAllArticle().subscribe({
      next:(data)=>{
         this.article=data;
         console.log(data);
        
      }

    }) 
   //liste article local 
   /*  **********get postion user ********* */
   navigator.geolocation.getCurrentPosition((position) => {
  
    this.center = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
  
    };
    
    console.log(this.center.lat);
    console.log(this.center.lng);
    //sauvagrde position de user dans local storage
    //localStorage.setItem("Position", JSON.stringify({ lat: this.center.lat, lng: this.center.lng }));

  });
  /*********appel fonction ArticleLocal **********/
  this.vendorServ.getLocal(this.Activity,this.center.lat,this.center.lng).subscribe({
    next:(data)=>{
      this.Local=data;
       console.log(data);
       console.log(this.Local);
      
    }

  }) 
  
 

  }

}
