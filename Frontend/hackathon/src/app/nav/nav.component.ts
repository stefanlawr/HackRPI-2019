import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';

import { DataService } from './../services/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  student: User = { first_name: '', last_name: '' };

  // constructor() {}
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getUser().subscribe(res => {
      this.student = res;
    });
  }
}
