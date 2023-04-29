import { Component, Input, OnInit } from '@angular/core';
import { page } from '../Models/page';
import { UserServiceService } from '../_services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorServicesService } from '../_services/vendor-services.service';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.scss']
})
export class UpdatePageComponent  implements OnInit{
  @Input() page:page={
    id: '',
    title: '',
    address: '',
    email: '',
    city: '',
    phone: 0,
    activity: '',
    postalCode: 0,
    p: []
  }
  id:any;
  constructor(private vendorSer: VendorServicesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
    
  
  }

  updatePage():void{
   
   
    let id=this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.vendorSer.updatePage(id,this.page)
    .subscribe({
      next: (data) => {
        
          console.log('User updated successfully:', data);
        },
        error:(e)=>console.error(e)
      }
      
    );
  }


}
