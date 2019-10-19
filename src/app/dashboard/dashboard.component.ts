import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bookCategory = [];
  constructor() { }

  ngOnInit() {
    this.bookCategory = [
      {id:1,name: 'Fiction'},
      {id:2,name: 'Drama'},
      {id:3,name: 'Humor'},
      {id:4,name: 'Politics'},
      {id:5,name: 'Philosophy'},
      {id:6,name: 'History'},
      {id:7,name: 'Adventure'}
    ]
  }

}
