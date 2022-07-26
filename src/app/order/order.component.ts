import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
   
  orderList: any
  payment:any
  constructor(private orderservice: CartService ) { }

  // make payment 
  public pay(id:number){
    this.payment = this.orderservice.makePayment(id).subscribe((data)=>{this.payment=data;
            console.log(data);
            
    });
  }

  ngOnInit(): void {
    // order list 
    this.orderList = this.orderservice.getAllOrders().subscribe((data: any) =>{ this.orderList = data; 
    });

  }
}
