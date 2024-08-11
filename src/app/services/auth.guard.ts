import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  debugger
  const router =inject(Router)
  const localdata = localStorage.getItem('WebTocken')
  if(localdata!=null){
    return true
  }else{
    router.navigateByUrl('/login')
    return false
  }
};
