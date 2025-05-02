import { Component } from '@angular/core';
import { KeycloakService } from '../../services/keycloak/keycloak.service';
import { User } from '../../services/keycloak/User';

@Component({
  selector: 'app-edit-profile',
  standalone: false,
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {

  user: User | undefined;

  constructor(private keycloakService : KeycloakService){
    this.user = this.keycloakService.user;
  }

  editProfile(){
     this.keycloakService.manageAccount();
  }


}
