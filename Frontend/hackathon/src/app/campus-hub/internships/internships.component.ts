import { Component, OnInit } from '@angular/core';

import { Internship } from './internship.model';
import { InternshipService } from './internship.service';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.scss']
})
export class InternshipsComponent implements OnInit {
  event: Internship[] = [];
  item: Internship[] = [];

  constructor(private internshipService: InternshipService) {}

  ngOnInit() {
    this.getInternshipList();
  }

  private getInternshipList() {
    this.internshipService.getInternships().subscribe(res => {
      this.event.push(res[1]);
    });
  }
}
