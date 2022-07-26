import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer/customer.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  public customer={
    customerId:'',
    fullName:'',
    mobileNumber:'',
    password:'',
    email:'',
    gender:''

  }; 

  ngOnInit(): void {
  }

  // customer registration submit
 formSubmit(){

  this.customerService.addNewCustomer(this.customer).subscribe(
    (data: any)=>{
      console.log(data);
     alert('success');
    },
    (error: any)=>{
      console.log(error);
      alert('error');
    }
  )
  
 } 

}
