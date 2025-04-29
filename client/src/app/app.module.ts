import { inject, NgModule, provideAppInitializer } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { KeycloakService } from './services/keycloak/keycloak.service';
import { FilmComponent } from './pages/film/film/film.component';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { httpTokenInterceptor } from './services/interceptor/http-token.interceptor';
import {MatCardModule} from '@angular/material/card';

export function KcFactory(kcService: KeycloakService) : Promise<any>{
    return  kcService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilmCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [
    provideHttpClient(withInterceptors([httpTokenInterceptor])),
    provideHttpClient(withInterceptorsFromDi()),
    provideAppInitializer(() => KcFactory(inject(KeycloakService))),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
