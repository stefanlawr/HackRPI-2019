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
  i: number;

  constructor(private internshipService: InternshipService) {}

  ngOnInit() {
    this.getInternshipList();
  }

  private getInternshipList() {
    this.internshipService.getInternships().subscribe(res => {
      console.log(res[1]);
      console.log(res);
      res.resultSet.forEach(item => {
        this.event.push(item);
      });
      // console.log(res[this.i]);
      // this.event.push(res[1]);
    });
  }
}
