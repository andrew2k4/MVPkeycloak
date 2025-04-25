import { HttpEventType, HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { KeycloakService } from '../keycloak/keycloak.service';
import { from, mergeMap, tap } from 'rxjs';


export const httpTokenInterceptor: HttpInterceptorFn = (req, next) => {

  const keycloakService = inject(KeycloakService);

  return from(
    keycloakService.keycloak.updateToken(60)
  ).pipe(
    mergeMap(()=>{
      const token = keycloakService.keycloak.token;
      console.log("intercept")
      if(token){
        const authReq = req.clone({
          headers: req.headers.set(
            "Authorization", `Bearer ${token}`
          )
        })
        return next(authReq)
      }


      return next(req);
    })
  )
};
