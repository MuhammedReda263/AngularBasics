import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from "../product/product";
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  imports: [Product, FormsModule],
  templateUrl: './order.html',
  styleUrl: './order.css'
})
export class Order implements AfterViewInit {
  categories: Icategory[];
  selectedCatId: number = 0;
  recivedOrderPrice: number = 0;

  @ViewChild('textInput') myInp!: ElementRef; //decorator -- to get element in html by refrences [like dom]
  @ViewChild(Product) productObj!: Product; // get object of ts of the child



  constructor() {
    this.categories = [
      { id: 1, name: "Laptops" },
      { id: 2, name: "Mobails" },
      { id: 3, name: "Tablets" },
    ];
  }
  ngAfterViewInit(): void {
    this.myInp.nativeElement.value = "Mona"
    console.log(this.productObj.totalPrice)
  }
  calcluteOrderPrice(top: number) {
    this.recivedOrderPrice = top;
  }
}
