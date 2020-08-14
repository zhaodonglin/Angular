import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  @Input() isActive:boolean;
  @Input() likeCount:number;

  constructor() { }

  ngOnInit() {
    this.isActive = false;
  }
  
  onClick() {
    this.isActive = !this.isActive;
    this.likeCount = this.likeCount + (this.isActive? +1:-1);
  }
}
