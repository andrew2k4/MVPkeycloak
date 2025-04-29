import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-film-card',
  standalone: false,
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.css'
})

export class FilmCardComponent {
  @Input() film : Film | undefined
}


interface Film {
  id: number;
  name: string;
  image: string;
  description: string;
}
