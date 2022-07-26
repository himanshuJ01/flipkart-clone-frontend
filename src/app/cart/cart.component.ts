import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public addToCart={
    productId:'',
    userId:'',
    cartId:''

  };
  constructor(public addtocart:CartService) { }

  FillCartDetails(){
    this.addtocart.addNewCart(this.addToCart).subscribe(
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
  
  ngOnInit(): void {
  }

}
