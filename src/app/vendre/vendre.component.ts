import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { page } from '../Models/page';
import { VendorServicesService } from '../_services/vendor-services.service';

@Component({
  selector: 'app-vendre',
  templateUrl: './vendre.component.html',
  styleUrls: ['./vendre.component.scss']
})
export class VendreComponent {
  id!: string;

  @Input() page:page={
    id: '',
    title: '',
    address: '',
    email: '',
    city: '',
    phone: 0,
    postalCode: 0,
    p: [],
    activity: ''
    
  }
  imageProfile!: File;
  imageCouverture!: File;

 constructor(private vendorServ:VendorServicesService){}

  ajouterVente(): void {
    this.vendorServ.ajouterPage(this.id, this.page, this.imageProfile, this.imageCouverture)
      .subscribe(resp => {
        
        console.log('Page de vente ajoutée avec succès')
      });
  }
  onProfilImageSelected(event: any): void {
    this.imageProfile = event.target.files[0];
  }
  onCouvertureImageSelected(event: any): void {
    this.imageCouverture = event.target.files[0];
  }

}
