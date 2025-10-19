import { Component, OnDestroy, OnInit } from '@angular/core';
import { Notifications } from '../../services/notifications';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { decreaseCounter, increseCounter } from '../../store/counter/counter.action';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

counter:Observable<number>
constructor(private _store:Store<{counter:number}>){
 this.counter = this._store.select("counter");
}

increaseCounterVal(){
  this._store.dispatch(increseCounter())
}
dexreseCounterVal(){
  this._store.dispatch(decreaseCounter())
}

  // subscripation : Subscription | undefined
  // constructor(private _Notification : Notifications){
    
  // }

  // ngOnInit(): void {
  //  this.subscripation = this._Notification.getNotifications().subscribe({
  //     next:(notfication)=>{
  //       console.log(notfication);
  //     },
  //     error:(error)=>{
  //       console.log(error);
  //     },
  //     complete:()=>{
  //       console.log('notfication completed succefully');
  //     }
  //   });
  // }
  //   ngOnDestroy(): void {
  //   this.subscripation?.unsubscribe()
  // }

}
