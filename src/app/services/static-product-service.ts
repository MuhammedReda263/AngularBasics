import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductService {
   products :Iproduct[];

   constructor() {
    this.products= [
    {id:"1",name:"Laptop Dell",price:5000,imgUrl:"https://picsum.photos/200/300/?blur=2",quantity:1,catId:1},
    {id:"2",name:"Laptop Lenovo",price:2000,imgUrl:"https://picsum.photos/200/300?grayscale",quantity:6,catId:1},
    {id:"3",name:"Iphone 13",price:3000,imgUrl:"https://picsum.photos/200/300?grayscale",quantity:5,catId:2},
    {id:"4",name:"Iphone 8",price:8000,imgUrl:"https://picsum.photos/200/300/?blur=2",quantity:0,catId:2},
    {id:"5",name:"Tablet Samsung",price:1000,imgUrl:"https://picsum.photos/200/300?grayscale",quantity:7,catId:3},
    {id:"6",name:"Tablet Lenovo",price:6000,imgUrl:"https://picsum.photos/200/300/?blur=2",quantity:5,catId:3}
  ];
  
   }
  
   getAllProducts () : Iproduct[] {
    return this.products
   }

   getProductById (id:string) : Iproduct | null {
    let products = this.products.find(temp=>temp.id==id);
    return products ?? null;
   }

   
   getProductsByCatId (catid:number) : Iproduct[]  {
    let products;
    if (catid==0){
      products = this.products;
    }
    else{
      products = this.products.filter(temp=>temp.catId==catid);
    }
    
    return products ;
   }
 getMappedProductsId () : string[] {
  return this.getAllProducts().map(temp => temp.id);
 }

   
}
