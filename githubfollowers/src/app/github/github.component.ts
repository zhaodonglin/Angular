import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { all } from 'q';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  
  followers:any = [];
  constructor(private http:HttpClient) { }


  ngOnInit() {
    this.http.get<any[]>('https://api.github.com/users/mosh-hamedani/followers').pipe()
    .subscribe(data=>{this.followers= data});
    console.log('xxx', this.followers);
  }


}
