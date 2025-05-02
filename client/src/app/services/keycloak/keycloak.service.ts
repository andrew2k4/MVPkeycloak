import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {


  private _keycloak : Keycloak | undefined;
  private _user: User | undefined;

  get keycloak() {
      if(!this._keycloak){
        this._keycloak = new Keycloak({
          url: 'http://localhost:8080',
          realm: 'andrew-backend',
          clientId: 'public-client',
        },
      )
      }
    return this._keycloak;
  }

  get user(): User | undefined {
    return this._user;
  }


  constructor() { }

  async init(): Promise<any>{
    const authenticated : boolean =  await this.keycloak?.init({
      onLoad : 'check-sso',
      pkceMethod: 'S256',
      flow: 'standard',
      checkLoginIframe: false
    })

    if(authenticated){
        this._user = (await this.keycloak?.loadUserProfile()) as User
        this._user.token = this.keycloak?.token;
        console.log(this.user)
    }

  }


  login(){
    return this.keycloak?.login();
  }

  register() {
    return this.keycloak?.register()
  }

  logout() {
    return this.keycloak?.logout();
  }

  manageAccount() {
    return this.keycloak?.accountManagement();
  }

}
