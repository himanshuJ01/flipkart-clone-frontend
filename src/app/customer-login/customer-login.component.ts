import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer/customer.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

 loginData={
   email:'',
   password:''
 };



  constructor(private login: CustomerService) { }


  

  ngOnInit(): void {
  }

//  customer login form submit
  formSubmit(){
    if(this.loginData.email.trim()=='' || this.loginData.email==null)
   {
     console.log("email requied");
   }

   this.login.generateToken(this.loginData).subscribe(
     (data: any)=> {
       console.log(data);
       alert("success");

      
        window.location.href=''
     },
     (error:any)=> {
       console.log(error);
       alert("error");
     }
   );

  }

}
