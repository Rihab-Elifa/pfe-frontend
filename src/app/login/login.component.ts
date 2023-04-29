import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { user } from '../Models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles!: string;
  email!:string;

  constructor(private authService: AuthService,private route:Router) { }

  ngOnInit(): void {
   
  }

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe({
      next: data => {

        const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
        const email = currentUser.email;
        // retrieve other data as needed
        this.route.navigate(['profile']);
  
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        
        
      
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

 
}
