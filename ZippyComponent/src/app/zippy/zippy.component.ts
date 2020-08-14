import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  @Input() title:string;
  show:boolean;

  constructor() { 
    this.show = false;
  }

  ngOnInit() {
  }

  onClick() {
    this.show = !this.show;
  }

  
}
