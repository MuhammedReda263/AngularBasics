import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { Iproduct } from '../../models/iproduct';
import { ApiProducts } from '../../services/api-products';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  imports: [CommonModule,FormsModule] ,
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct {
categories: Icategory[]= [
      { id: 1, name: "Laptops" },
      { id: 2, name: "Mobails" },
      { id: 3, name: "Tablets" },
    ];
  product!: Iproduct;
  price: any;
  

    constructor(private _apiProduct: ApiProducts, private _router:Router) {
    this.categories = [
      { id: 1, name: "Laptops" },
      { id: 2, name: "Mobails" },
      { id: 3, name: "Tablets" },
    ];
  }
  
  ngOnInit(): void {
  }
// في الـ Component

  addProduct(product: Iproduct) {
    this._apiProduct.addProducts(product).subscribe({
      next: (res) => {
        this.product = res,
        alert("Done"),
        this._router.navigateByUrl("/ProductPath")

      },
      error: (err) => console.log(err)
    });
  }
}
