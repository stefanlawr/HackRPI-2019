import { Component, OnInit } from '@angular/core';

import { Clubs } from './clubs.model';
import { ClubsService } from './clubs.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {
  event: Clubs[] = [];

  constructor(private clubsService: ClubsService) {}

  ngOnInit() {
    this.getScholarshipList();
  }

  private getScholarshipList() {
    this.clubsService.getClubs().subscribe(res => {
      console.log(res);
      for (const results of res) {
        this.event.push(results);
      }
    });
  }
}
