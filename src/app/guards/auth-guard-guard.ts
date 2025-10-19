import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuth } from '../services/user-auth';

export const authGuardGuard: CanActivateFn = (route, state) => {
  let _userAuthService = inject(UserAuth);
  let _router = inject(Router);
  if (_userAuthService.isuserLogged()){
    return true
  } else{
    alert("You aren't login");
    _router.navigateByUrl('/LoginPath')
    return false
  }
};
