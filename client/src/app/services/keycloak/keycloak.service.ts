import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import { User } from './User';
import { HttpClient } from '@angular/common/http';
import { UserEditProfile } from './UserEditProfile';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {


  private _keycloak : Keycloak | undefined;
  private _user: User | undefined;

  res : any
  get keycloak() {
      if(!this._keycloak){
        this._keycloak = new Keycloak({
          url: 'http://localhost:7080',
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


  constructor(private httpClient : HttpClient) { }

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

  updatePassword(userEditProfile : UserEditProfile) {
    this.httpClient.put("http://localhost:8080/auth/admin/realms/andrew-backend/users/"+ this.keycloak.tokenParsed?.sub,userEditProfile).subscribe((res) => console.log(res))
  }

}
