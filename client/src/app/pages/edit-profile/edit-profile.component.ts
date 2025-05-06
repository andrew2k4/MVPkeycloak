import { Component } from '@angular/core';
import { KeycloakService } from '../../services/keycloak/keycloak.service';
import { User } from '../../services/keycloak/User';
import { UserEditProfile } from '../../services/keycloak/UserEditProfile';

@Component({
  selector: 'app-edit-profile',
  standalone: false,
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {


  user : UserEditProfile = {
    email: "",
    firstname: "",
    lastname: "",
    credentials: [
      {
        type: "password",
        value:  "",
        temporary : false
      }
    ]
  };


  constructor(private keycloakService : KeycloakService){
    this.user.email = this.keycloakService.keycloak.profile?.email;
    this.user.firstname = this.keycloakService.keycloak.profile?.firstName;
    this.user.lastname = this.keycloakService.keycloak.profile?.lastName;
  }

  editProfile(){
    console.log("manger")
    this.keycloakService.updatePassword(this.user);
  }



}
