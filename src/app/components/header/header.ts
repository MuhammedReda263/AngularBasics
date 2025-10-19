import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuth } from '../../services/user-auth';
import { Store } from '@ngrx/store';
import { languageAction } from '../../store/language/language.action';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
isUserLogged : boolean
currentLang : string = "ar"
constructor(private _authservice:UserAuth,private _store :Store<{language:string}>){
  this.isUserLogged = _authservice.isuserLogged()
  _store.select("language").subscribe((lang)=>
    this.currentLang=lang=="ar"? "en" : "ar"
  )


}
  ngOnInit(): void {
    this._authservice.getObserver().subscribe(
      {
        next:(status)=>{
          this.isUserLogged = status
        }
      }
    )
  }

  changeLang(){
    this._store.dispatch(languageAction({language:this.currentLang}))
  }


}
