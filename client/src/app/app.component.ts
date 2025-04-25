import { Component, OnInit } from '@angular/core';

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
  constructor(){
    console.log("a")
  }
}
