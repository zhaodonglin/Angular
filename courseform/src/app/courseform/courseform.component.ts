import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courseform',
  templateUrl: './courseform.component.html',
  styleUrls: ['./courseform.component.css']
})

// interface category{
//   id:number,
//   value:string;
// };
export class CourseformComponent implements OnInit {
  categorys = [
    {'id':1, 'value':'developement'},
    {'id': 2, 'value':'arts'}, 
    {'id':3, 'value':'language'}
];

constructor() { }

  ngOnInit() {
  }

  submit(f) {
    console.log('debug')
  }

}
