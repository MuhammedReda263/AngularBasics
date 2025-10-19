import { Component, OnInit } from '@angular/core';
import { StaticProductService } from '../../services/static-product-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../../models/iproduct';
import { Location } from '@angular/common';
import { ApiProducts } from '../../services/api-products';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details implements OnInit {
  currentId : number =0;
  product : Iproduct | null = null
  productsIdList : string[]
constructor(
  _StaticProductService : StaticProductService,
  private _ApiProducts : ApiProducts,
  private _activatedRoute : ActivatedRoute,
  private _location : Location,
  private _router : Router
){
  this.productsIdList = _StaticProductService.getMappedProductsId();
}
  ngOnInit(): void {
     this._activatedRoute.paramMap.subscribe(p=>{ // listen whwn any param value be changed
     this.currentId= Number(p.get('id')),
     this._ApiProducts.getProductById(this.currentId).subscribe({
      next:(res)=> this.product = res,
      error:(err)=>console.log(err)
     })
     }

     );
   ;   
    console.log(this.currentId)
  }
  BackFun(){
    this._location.back();
  }

//   PrevFun (){
//   let index = this.productsIdList.indexOf(this.currentId);
//    if (index!=0)
//   this._router.navigateByUrl(`DetailsPath/${this.productsIdList[index-1]}`)
//   }
//   NextFun(){
//  let index = this.productsIdList.indexOf(this.currentId);
//  if (index!=this.productsIdList.length-1)
//   this._router.navigateByUrl(`DetailsPath/${this.productsIdList[index+1]}`)
//   }

}
