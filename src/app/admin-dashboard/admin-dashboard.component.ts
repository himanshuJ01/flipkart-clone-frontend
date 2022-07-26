import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../services/product/productlist.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  productList: any;
  public addPro={
    productId:'',
    productName:'',
    productType:'',
    category:'',
    price:'',
    imageUrl:''

  };
  
 public del(id:number){
    let resp = this.products.Delete(id);
    resp.subscribe((data:any)=>this.productList=data);
}
    
  


   addProduct(){
    this.products.addNewProduct(this.addPro).subscribe(
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
 
  
  constructor(public products: ProductlistService) { }
  ngOnInit(): void {
    this.productList = this.products.getAllProducts().subscribe(data =>{ this.productList = data; 
    });

  }
}
