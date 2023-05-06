import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../_services/user-service.service';
import { user } from '../Models/user';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.scss']
})
export class CommanderComponent implements OnInit {
  user:user={
    id: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: null,
    ppg: []
  }
  constructor(private route:ActivatedRoute,private userServ:UserServiceService){}

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
      const email = currentUser.email;

      this.getUser(email);
    


}


getUser(email:any){
this.userServ.getUserByemail(email)
.subscribe({
  next: (data) => {
    this.user = data;  
     console.log(this.user.firstName);
  },
  error: (e) => console.error(e)
});
console.log(this.user.firstName);
}}