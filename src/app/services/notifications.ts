import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Notifications {
  notifications: string[];
  constructor() {
    this.notifications = [
      'You have unread messages',
      'pepole reacting to your post',
      'hamada sent you a friend request',
      "",
      'post shared successfully'
    ]
  }
  getNotifications(): Observable<string> {
    let count = 0
    return new Observable<string>((observer) => {
      let idOfIntereval = setInterval(() => {
        if (count == this.notifications.length) {
          observer.complete() //stop
        }

        if (this.notifications[count] == "") {
          observer.error("this notifacation is empety") //error
        }

        observer.next(this.notifications[count]) //error
        count++;

      }, 2000)

      return {
        unsubscribe: () =>
          clearInterval(idOfIntereval)
      }
    })




  }
}
