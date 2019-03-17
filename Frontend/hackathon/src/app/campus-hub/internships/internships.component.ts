import {Component, OnInit} from '@angular/core';

import {Internship} from './internship.model';
import {InternshipService} from './internship.service';

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
      this.item = res[1];
      console.log('item', this.item);
      console.log('res[0]', res[0]);
      console.log('res[_t_id]', res[`e_t_id`]);
      this.event.push(res[0]);
    });
  }
}
