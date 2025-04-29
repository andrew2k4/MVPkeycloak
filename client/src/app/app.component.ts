import { Component, OnInit } from '@angular/core';
import { KeycloakService } from './services/keycloak/keycloak.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    console.log("a")
    this.title = "jemang"
  }
  title = 'client';
  isAuth : boolean = false
  constructor(private keycloakService : KeycloakService){
    console.log("a")

  }

  login(){
    this.keycloakService.login()
  }

  register(){
    this.keycloakService.register()
  }

  logout(){
    this.keycloakService.logout()
  }

  isAuthenticated(){
    if(this.keycloakService.keycloak.authenticated){
      console.log("auth")
      this.isAuth = false
    }

    this.isAuth = true
  }

}
