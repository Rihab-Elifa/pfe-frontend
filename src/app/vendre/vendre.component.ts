import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { page } from '../Models/page';
import { VendorServicesService } from '../_services/vendor-services.service';
import { Activity } from '../Models/Activity';
import { Region } from '../Models/Region';

@Component({
  selector: 'app-vendre',
  templateUrl: './vendre.component.html',
  styleUrls: ['./vendre.component.scss']
})
export class VendreComponent {
  id!: string;
  listeAct: Activity[] = [Activity.BEAUTE,Activity.ELECTROMENAGER,Activity.ELECTRONIQUES,Activity.MODE,Activity.PATISSERIE,Activity.RESTAURANTS,Activity.RESTAURANTS,Activity.SPORTS,Activity.SUPERETTE];
  listRegion=Object.values(Region);
  listeAct2 = Object.values(Activity);
  @Input() page:page={
    id: '',
    title: '',
    address: '',
    email: '',
    phone: 0,
    activity: Activity.RESTAURANTS,
    postalCode: 0,
    region: Region.Ariana
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
