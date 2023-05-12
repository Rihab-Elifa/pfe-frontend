import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from '../Models/Commande';
const AUTH_API = 'http://localhost:8085/api/auth/AjoutCommande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }

  
  AddCommade(commande:Commande): Observable<any>{
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
  
    return this.http.post(AUTH_API, commande);
  }
  
}
