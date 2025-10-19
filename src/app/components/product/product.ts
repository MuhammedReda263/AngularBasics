import { AfterViewInit, Component, ElementRef, EventEmitter, Input, input, OnChanges, OnInit, Output, output, SimpleChanges, ViewChild, viewChild } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms'; // For two way binding
import { CommonModule } from '@angular/common';
import { Highlightcard } from '../../directives/highlightcard';
import { SqurePipe } from '../../pipes/squre-pipe';
import { Route, Router } from '@angular/router';
import { ApiProducts } from '../../services/api-products';


@Component({
  selector: 'app-product',
  standalone:true,
  imports: [FormsModule, CommonModule,Highlightcard,SqurePipe],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product implements OnChanges,OnInit{
 products :Iproduct[]=[] as Iproduct[];
 filteredProducts: Iproduct[];
 MyDate:Date = new Date
 num:number=4
 totalPrice : number=0;

 @Input() recievedCatid : number=0
 @Output() onTotalPriceChanged : EventEmitter<number>;



 constructor(private _ApiProducts : ApiProducts, private router:Router){

   this.onTotalPriceChanged = new EventEmitter<number>;
   this.filteredProducts=this.products;
 }
  ngOnInit(): void {
  this._ApiProducts.getAllProducts().subscribe({
   next:(res)=>{
    this.products = res;
    this.filteredProducts = this.products
   },
   error:(err)=>{
    console.log(err)
   }
  });
  }


  ngOnChanges(){
    // this.filteredProducts = this._StaticProductService.getProductsByCatId(this.recievedCatid);
    this._ApiProducts.getProductsByCatId(this.recievedCatid).subscribe(
      {
        next:(res)=> this.filteredProducts = res,
        error:(err)=> console.log(err)
      }
    )
  }

 buy (count:string,price:number):void{
  let num = parseInt(count);
  if (!isNaN(num)){
this.totalPrice+=parseInt(count)*price;
  }

  
    
    this.onTotalPriceChanged.emit(this.totalPrice);
 }
goToDetails(id:number){
this.router.navigateByUrl(`/DetailsPath/${id}`)
console.log(id)
// this.router.navigate(['/DetailsPath', id]);
}

//  FilterProducts (){
//   if (this.recievedCatid!=0){
//       this.filteredProducts = this.products.filter(temp=>temp.catId==this.recievedCatid);

//   }
//   else{
//       this.filteredProducts = this.products
//   }
//  }
}
