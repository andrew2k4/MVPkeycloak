import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { KeycloakService } from '../keycloak/keycloak.service';

export const authGuard: CanActivateFn =  (route, state) => {
  const keycloakService = inject(KeycloakService);
  console.log("andrew")

  if(!keycloakService.keycloak.authenticated){
    console.log("andrew")
    keycloakService.login()

    return false
  }
  return true
};
