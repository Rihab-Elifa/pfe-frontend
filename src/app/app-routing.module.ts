import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ListVendorComponent } from './list-vendor/list-vendor.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AddCatComponent } from './add-cat/add-cat.component';
import { CategorieDetailsComponent } from './categorie-details/categorie-details.component';
import { ProfileComponent } from './profile/profile.component';
import { VendreComponent } from './vendre/vendre.component';
import { SocialComponent } from './social/social.component';
import { HomeComponent } from './home/home.component';
import { MyPagesComponent } from './my-pages/my-pages.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdatePageComponent } from './update-page/update-page.component';
import { MapsComponent } from './maps/maps.component';
import { ProfileVendorComponent } from './profile-vendor/profile-vendor.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { AllArticleComponent } from './all-article/all-article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CartComponent } from './cart/cart.component';
import { CommanderComponent } from './commander/commander.component';


const routes: Routes = [{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},

{path:'list-vendor',component:ListVendorComponent},
{path:'list-category',component:CategoryListComponent},
{path:'add-category',component:AddCatComponent},
{path:'categorie-details',component:CategorieDetailsComponent},
{path:'profile',component:ProfileComponent, children:[
  {path:'update/:id',component:UpdateUserComponent},
  {path:'vendor',component:VendreComponent},
  
  {path:'addP',component:AddProduitComponent},
  {path:'UpdatePage/:id',component:UpdatePageComponent},
  
  
]},

{path:'profile/profile-vendor',component:ProfileVendorComponent,children:[
  

  {path:'myPage/:id',component:MyPagesComponent},
  {path:'myPage/:id/detailP/:id',component:DetailsPageComponent},
  {path:'vendor',component:VendreComponent},
  {path:'Update/:id',component:UpdatePageComponent},
  {path:'addP',component:AddProduitComponent},
  {path:'UpdateArticle',component:UpdateArticleComponent},
  {path:'ListeArticle',component:AllArticleComponent},
  {path:'ListeArticle/DetailArt/:id',component:ArticleDetailComponent}
  
 

]},


 


{path:'maps',component:MapsComponent},



{path:'social',component:SocialComponent},
{path:'home',component:HomeComponent},
{path:'home/cart',component:CartComponent},
{path:'home/cart/commander/:p',component:CommanderComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
