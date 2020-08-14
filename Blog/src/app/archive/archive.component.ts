import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  year:number;
  month:number;
  constructor(private router:Router,
   private route:ActivatedRoute) { }

  ngOnInit() {
    let params = this.route.snapshot.paramMap;

    this.year = +params.get('year');
    this.month = +params.get('month');

  }
  onClick() {
    console.log('clickced');
    this.router.navigate(['/']);
  }

}
