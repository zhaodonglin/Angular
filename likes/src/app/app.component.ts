import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'likes';
  tweet={
    body:"Here is the body of tweet...",
    isLiked:false,
    likesCount:10
  };
}
