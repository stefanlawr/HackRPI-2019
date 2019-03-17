import { Component, OnInit } from '@angular/core';

import { Scholarship } from './scholarship.model';
import { ScholarshipsService } from './scholarships.service';

@Component({
  selector: 'app-scholarships',
  templateUrl: './scholarships.component.html',
  styleUrls: ['./scholarships.component.scss']
})
export class ScholarshipsComponent implements OnInit {
  event: Scholarship[] = [];

  constructor(private scholarshipsService: ScholarshipsService) {}

  ngOnInit() {
    this.getScholarshipList();
  }

  private getScholarshipList() {
    this.scholarshipsService.getScholarships().subscribe(res => {
      console.log(res);
      for (const results of res) {
        this.event.push(results);
      }
    });
  }
}
