import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [Header,Footer,RouterOutlet,RouterModule,AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerceApp');
  lnaguage : Observable<string>
  dirc : string =  "ltr"
  constructor(private _store:Store <{language:string}>){
 this.lnaguage = this._store.select('language')
 this.lnaguage.subscribe((lan)=>
this.dirc=(lan=="en")?"ltr" : "rtl"
)
  }

}

