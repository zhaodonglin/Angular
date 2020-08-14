import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  empty:boolean
  constructor() {
    this.empty = false;
   }

  ngOnInit() {
  }

  onClick() {
    this.empty = !this.empty
  }
}
