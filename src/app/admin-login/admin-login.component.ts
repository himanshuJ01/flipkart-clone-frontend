import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginData={
    email:'',
    password:''
  };
 
 
 
   constructor(private login: AdminService) { }
 
   ngOnInit(): void {
   }
 
   formSubmit(){
     if(this.loginData.email.trim()=='' || this.loginData.email==null)
    {
      console.log("email requied");
    }
 
    this.login.generateToken(this.loginData).subscribe(
      (data: any)=> {
        console.log(data);
        alert("success");
 
        // this.login.loginCustomer(data.jwtToken);
         window.location.href='admin-dashboard'
      }, 
      (error: any)=> {
        console.log(error);
        alert("error");
      }
    );
 
   }
}
