import { Component, OnInit } from '@angular/core';

import { Students } from './students.model';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  event: Students[] = [];

  constructor(private clubsService: StudentsService) {}

  ngOnInit() {
    this.getStudentList();
  }

  private getStudentList() {
    this.clubsService.getStudents().subscribe(res => {
      console.log(res);
      for (const results of res) {
        this.event.push(results);
      }
    });
  }
}
