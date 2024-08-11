import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  const myTocken = localStorage.getItem('WebTocken')
  const cloneReq =req.clone({
    setHeaders:{
      Authorization: `Bearer ${myTocken}`
    }
  })
  return next(cloneReq);

};
