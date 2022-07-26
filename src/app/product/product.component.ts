import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../services/product/productlist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList: any;
  

  constructor(public products: ProductlistService) { }

  

  ngOnInit(): void {
    this.productList = this.products.getAllProducts().subscribe(data =>{ this.productList = data; 
    });

  }

}

