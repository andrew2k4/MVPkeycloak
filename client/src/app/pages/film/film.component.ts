import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-film',
  standalone: false,
  templateUrl: './film.component.html',
  styleUrl: './film.component.css'
})
export class FilmComponent {

  constructor(private httpClient: HttpClient){

  }
  films : any;

  getFilm() {
    this.httpClient.get(" http://127.0.0.1:8000/films").subscribe((res)=> this.films = res)
    console.log(this.films)
  }

}
