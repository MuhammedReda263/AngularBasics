import { Component } from '@angular/core';
import { UserAuth } from '../../services/user-auth';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  isUserLogged:boolean;
constructor(private _logonService : UserAuth) { 
  this.isUserLogged = _logonService.isuserLogged()
}

login (){
  this._logonService.login();
  this.isUserLogged = this._logonService.isuserLogged()
  console.log(this.isUserLogged)
}

logout (){
  this._logonService.logout();
  this.isUserLogged = this._logonService.isuserLogged()
}


}
