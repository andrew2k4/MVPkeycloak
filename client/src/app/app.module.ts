import { APP_INITIALIZER, inject, NgModule, provideAppInitializer } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { KeycloakService } from './services/keycloak/keycloak.service';


export function KcFactory(kcService: KeycloakService) : Promise<any>{
    return  kcService.init();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAppInitializer(() => KcFactory(inject(KeycloakService)))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
