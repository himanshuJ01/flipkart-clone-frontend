import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  constructor(private http: HttpClient) {}

  public Delete(id:number){
    return this.http.delete('http://localhost:9091/del/'+id); 
  }

  public getAllProducts(){
    return this.http.get('http://localhost:9091/allproducts'); 
  }

  public addNewProduct(addPro:any){
    return this.http.post('http://localhost:9091/addproduct', addPro); 
  }

  
}
