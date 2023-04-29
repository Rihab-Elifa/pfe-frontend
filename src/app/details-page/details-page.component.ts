import { Component, OnInit } from '@angular/core';
import { VendorServicesService } from '../_services/vendor-services.service';
import { page2 } from '../Models/page2';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
 
  
  page2!:page2;
  
  constructor(private vendorServ:VendorServicesService,private route:ActivatedRoute){}
  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.vendorServ.getPage(id).subscribe({
      next: (data) => {
       this.page2=data;
       console.log(data);

      },
      error: (e) => console.error(e)
    });
    
  }
  //how get detail page image +data angular 15?

  


}