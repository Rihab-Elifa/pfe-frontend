import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeviceDto } from '../Models/DeviceDto';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private  AUTH_API = 'http://localhost:8085/api/auth/caisseNotif';
  private  AUTH_API1 = 'http://localhost:8085/notification/addDevice';
  constructor(private http:HttpClient) { }

  getNotification(id:string ): Observable<any>{
   
    return this.http.get( `${this.AUTH_API}/${id}`);
  }

  //add divice 
  addDivce(DeviceDto:DeviceDto):Observable<any>{
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    const email = currentUser.email;
    const token=currentUser.token;
    DeviceDto.email=email;
    DeviceDto.token=token;
  
    return this.http.post(this.AUTH_API,DeviceDto);
  }


  
}
