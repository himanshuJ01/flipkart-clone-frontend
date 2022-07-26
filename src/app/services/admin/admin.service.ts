import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  public generateToken(loginData: any){

    return this.http.post('http://localhost:9094/admin-auth', loginData );
  
  }

  
  
  // public loginCustomer(jwtToken: any){
  //   localStorage.setItem('jwtToken', jwtToken);
  //   return true;
  // }
}
