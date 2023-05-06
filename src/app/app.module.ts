import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserServiceService } from './_services/user-service.service';
import { ListVendorComponent } from './list-vendor/list-vendor.component';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { CategoryListComponent } from './category-list/category-list.component';
import { AddCatComponent } from './add-cat/add-cat.component';
import { CategorieDetailsComponent } from './categorie-details/categorie-details.component';
import { ProfileComponent } from './profile/profile.component';
import { VendreComponent } from './vendre/vendre.component';
import { SocialComponent } from './social/social.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider} from '@abacritt/angularx-social-login';
import { HomeComponent } from './home/home.component';
import { StorageModule } from '@ngx-pwa/local-storage';
import { TokenInterceptor } from './_helpers/token.interceptor';
import { MyPagesComponent } from './my-pages/my-pages.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdatePageComponent } from './update-page/update-page.component';
import { MapsComponent } from './maps/maps.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ProfileVendorComponent } from './profile-vendor/profile-vendor.component';
import { UpdateArticleComponent } from './update-article/update-article.component';

import { AllArticleComponent } from './all-article/all-article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CartComponent } from './cart/cart.component';
import { CommanderComponent } from './commander/commander.component'



@NgModule({
  declarations: [
  
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UpdateUserComponent,
    ListVendorComponent,
    CategoryListComponent,
    AddCatComponent,
    CategorieDetailsComponent,
    ProfileComponent,
    VendreComponent,
    HomeComponent,
    MyPagesComponent,
    DetailsPageComponent,
    AddProduitComponent,
    UpdatePageComponent,
    MapsComponent,
    ProfileVendorComponent,
    UpdateArticleComponent,
    AllArticleComponent,
    ArticleDetailComponent,
    CartComponent,
    CommanderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    GoogleMapsModule,
    SocialLoginModule,
    StorageModule.forRoot({})
    
    

  ],
  providers: [UserServiceService,TokenInterceptor,{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            'clientId'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('clientId')
        }
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
