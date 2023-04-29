import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, tap } from 'rxjs';
import { page } from '../Models/page';
import { page2 } from '../Models/page2';
import { Produit2 } from '../Models/Produit2';
import { Produit } from '../Models/Produit';
const AUTH_API = 'http://localhost:8085/pages/findAllPages';
const baseURL2 ="http://localhost:8085/api/auth/ListProduit";
@Injectable({
  providedIn: 'root'
})
export class VendorServicesService {
  private apiUrl = 'http://localhost:8085/pages';
  private  baseURL ="http://localhost:8085/pages/PagesUser";
  private apiUrl2 = 'http://localhost:8085/pages/detailPage';
  private apiUrl3 = 'http://localhost:8085/api/auth/addProduit';
  private apiUrl4 = 'http://localhost:8085/pages/editPage';
  private apiUrl5= 'http://localhost:8085/pages/delete';
 
  constructor(private http:HttpClient) { }

 private  _loading$=new BehaviorSubject<boolean>(false);
  get loading$(): Observable<boolean>{
    return this._loading$.asObservable();
  }

  private _vendors$=new BehaviorSubject<page2[]>([]);
  get vendors$():Observable<page2[]>{
    return this._vendors$.asObservable();
  }

  private setLoadingStatus(loading:boolean){
    this._loading$.next(loading);
  }
  //liste des pages vendor
  getVendorFromServer(){


   this.setLoadingStatus(true);
    this.http.get<page2[]>(AUTH_API).pipe(
      delay(1000),
      tap(vs => {
        this._vendors$.next(vs);
        this.setLoadingStatus(false);
      })
    ).subscribe();
}
//add page 

ajouterPage(id: string, pagesDto: any, imageProfile: File, imageCouverture: File): Observable<any> {
  const formData: FormData = new FormData();
  formData.append('page', new Blob([JSON.stringify(pagesDto)],{type: 'application/json'}));
  if (imageProfile) {
    formData.append('imageProfile', imageProfile);
  }
  if (imageCouverture) {
    formData.append('imageCouverture', imageCouverture);
  }
    // Spécification des en-têtes
    const headers = new HttpHeaders();
    headers.append('enctype', 'multipart/form-data'); // Spécifier le type d'encodage du formulaire
    const options = { headers: headers };
  return this.http.post(`${this.apiUrl}/addPage/${id}`, formData,options);
}
 //list pages du user
 getAllP(id:string|null): Observable<page2[]> {
  return this.http.get<page2[]>(`${this.baseURL}/${id}`);
}

//detail de page
getPage(id:string |null):Observable<page2>{
  return this.http.get<page2>(`${this.apiUrl2}/${id}`);
}
//Update page
updatePage(id:string|null,p:page): Observable<string>{
  
  return this.http.put<string>(`${this.apiUrl4}/${id}`, p );
}

//deletepage
deletePage(idPage:string,iduser:string|null):Observable<any>{
  return this.http.delete(`${this.apiUrl5}/${idPage}/${iduser}`);


}
//***********************************Gestion Produit */
//add produit
ajouterProduit(id: string, pagesDto: any, imageProfile: File): Observable<any> {
  const formData: FormData = new FormData();
  formData.append('produit', new Blob([JSON.stringify(pagesDto)],{type: 'application/json'}));
  if (imageProfile) {
    formData.append('image', imageProfile);
  }
  
  // Spécification des en-têtes
    const headers = new HttpHeaders();
    headers.append('enctype', 'multipart/form-data'); // Spécifier le type d'encodage du formulaire
    const options = { headers: headers };
  return this.http.post(`${this.apiUrl3}/${id}`, formData,options);
}
//list du produit
getProduit():Observable<Produit2[]>{
  return this.http.get<Produit2[]>(baseURL2);
}







}
