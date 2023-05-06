import { Component, OnInit } from '@angular/core';
import { Produit2 } from '../Models/Produit2';
import { VendorServicesService } from '../_services/vendor-services.service';
import { Article } from '../Models/Article';
import { Activity } from '../Models/Activity';
import { PanierService } from '../_services/panier.service';
;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
 
  Aa:any=["FOOD","PATISSERIE","MAGAZINE"]
  article?:Article[];
  Local?:Article[];
  center!:any;
  a!:Number;
  b!:Number;
  products:any[]=[];
  selectedActivity:Activity= Activity.FOOD;
  constructor(private vendorServ:VendorServicesService,private panierSer:PanierService){}
  ngOnInit(): void {
    this.vendorServ.getAllArticle().subscribe({
      next:(data)=>{
         this.article=data;
         console.log(data);
        
      },
      error: (e) => console.error(e)

    }) 
   //liste article local 
   /*  **********get postion user ********* */
   navigator.geolocation.getCurrentPosition((position) => {
  
    this.center = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
  
    };
    
    console.log("valeur positon user :lat "+this.center.lat);
    console.log("valeur positon user : ing"+this.center.lon);
    this.a=this.center.lat;
    this.b=this.center.lon;
    console.log(this.a,this.b);
    
   
    /*this.vendorServ.getLocal(this.selectedActivity,this.a,this.b).subscribe((data)=>{
      console.log(data);
    })*/
    this.vendorServ.getLocal(this.selectedActivity,this.a,this.b).subscribe({
      next:(data)=>{
       console.log('hello');
        this.Local=data;
         console.log(data);
         console.log(this.Local);
        
      }
  
    })
  
    //sauvagrde position de user dans local storage
    //localStorage.setItem("Position", JSON.stringify({ lat: this.center.lat, lng: this.center.lng }));

  });
  /*********appel fonction ArticleLocal **********/
  //this.localArticle();
  this.products=this.panierSer.getProduct();
  console.log(this.products.length);
  
  }
 
//*******Add product to cart  */
addToCart(product:any){
  console.log(product);
  if(!this.panierSer.productInCart(product)){
    product.quantity=1;
    this.panierSer.addToCart(product);
    this.products=[this.panierSer.getAllProducts()];
   
  }
    
}



  
  

}
