import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {}

  
  public getAllOrders(){
    return this.http.get('http://localhost:9092/cart-all');
  }
 

  public addNewCart(addToCart:any){
    return this.http.post('http://localhost:9092/cart-add', addToCart); 
  }
  public makePayment(id:number){
    return this.http.get('http://localhost:9092/payment/'+id); 
  }

}
