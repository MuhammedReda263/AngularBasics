import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { UserAuth } from './user-auth';

@Injectable({
  providedIn: 'root'
})
export class ApiProducts {
  constructor(private _httpClieb : HttpClient,private _userAuth:UserAuth){

  }

  getAllProducts () : Observable<Iproduct[]> {
    
  return this._httpClieb.get<Iproduct[]>(`${environment.BaseUrl}/products`,{
    headers:new HttpHeaders({
       "authraization": this._userAuth.getToken()
    })
  });

  }
  
  getProductById (id:number):Observable<Iproduct> {
    let httpParams = new HttpParams();
    httpParams.append("id",id);
    httpParams.append("limit",5);

  return this._httpClieb.get<Iproduct>(`${environment.BaseUrl}/products/${id}`,{
    params:httpParams
  })
  }
  
     
  getProductsByCatId (catid:number): Observable<Iproduct[]>  {
     return this._httpClieb.get<Iproduct[]>(`${environment.BaseUrl}/products?catId=${catid}`)
   }

  addProducts (product:Iproduct): Observable<Iproduct>  {
     return this._httpClieb.post<Iproduct>(`${environment.BaseUrl}/products`,product)

   }
}
