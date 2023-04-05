import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import{HttpClient,HttpHeaders} from '@angular/common/http'
const AUTH_API = 'http://localhost:8080/api/auth/login';
const AUTH_API2 = 'http://localhost:8080/api/auth/registerUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl= AUTH_API 
  private username!:string;
  private token !:string;
  private role!:string;
  private isLogin!:boolean;

  constructor(private http: HttpClient) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    this.username = currentUser && currentUser.username;
    this.token = currentUser && currentUser.token;
    this.role = currentUser&& currentUser.role;
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http
      .post(AUTH_API , {
        email: username,
        password: password,
      })
      .pipe(
          map((response: any) => {
        const token = response.token;
        const role = response.role;
        if (token) {
          // set token property
          this.token = token;
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("currentUser", JSON.stringify({ username: username, token: token, role: role }));
          // get the current user from local storage and set the username, token and role properties
          const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
          this.username = currentUser.username;
          this.token = currentUser.token;
          this.role = currentUser.role;
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      })
      );
  }

  /*login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API,
      {
        email,
        password,
      }
    );
  }*/

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API2,
      {
        username,
        email,
        password,
      }
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { });
  }
}
