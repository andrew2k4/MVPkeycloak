import { Component, OnInit } from '@angular/core';
import { KeycloakService } from './services/keycloak/keycloak.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{


  title = 'client';
  isAuth : boolean = false

  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];


  ngOnInit(): void {
    this.isAuthenticated()
  }

  constructor(private keycloakService : KeycloakService){
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
      this.isAuth = true
      return
    }

    this.isAuth = false
  }

}
