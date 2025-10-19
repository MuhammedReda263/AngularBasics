import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuth {
private authSubj : BehaviorSubject<boolean>;
  constructor(){
    this.authSubj = new BehaviorSubject<boolean>(false)
  }
  login (){
    localStorage.setItem("key","fghh466465465564");
    this.authSubj.next(true);
  }

  logout (){
    localStorage.removeItem("key");
    this.authSubj.next(false)
  }

  getToken():string{
    return localStorage.getItem("Token")??"notFound;"
  }

  isuserLogged () : boolean {
    return localStorage.getItem("key")?true:false
  }
  
  getObserver() : BehaviorSubject<boolean>{
    return this.authSubj;
  }
}
