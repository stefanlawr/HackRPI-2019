import { Component, OnInit } from '@angular/core';

import { Internship } from './internship.model';
import { InternshipService } from './internship.service';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.scss']
})
export class InternshipsComponent implements OnInit {
  event: Internship[];

  constructor(private data: InternshipService) {}

  ngOnInit() {
    this.data.getInternships().subscribe(res => {
      this.event = res;
    });
  }
}
