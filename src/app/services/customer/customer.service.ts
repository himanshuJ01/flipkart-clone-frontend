import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {}



public addNewCustomer(customer: any){
  return this.http.post('http://localhost:9090/add', customer); 
}

public generateToken(loginData: any){

  return this.http.post('http://localhost:9090/customer-auth', loginData );

}

// public loginCustomer(jwtToken: any){
//   localStorage.setItem('jwtToken', jwtToken);
//   return true;
// }

}

