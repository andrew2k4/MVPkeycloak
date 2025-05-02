import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './services/guard/auth.guard';
import { FilmComponent } from './pages/film/film.component';

const routes: Routes = [{
  path: "film",
  component: FilmComponent,
  canActivate : [authGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
