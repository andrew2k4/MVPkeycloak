import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './services/guard/auth.guard';
import { FilmComponent } from './pages/film/film.component';
import { HomeComponent } from './pages/home/home.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "film",
    component: FilmComponent,
    canActivate : [authGuard]
  },
  {
    path: "edit",
    component: EditProfileComponent,
    canActivate : [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
