import {Component, OnInit} from '@angular/core';

import {Jobs} from './jobs.model';
import {JobsService} from './jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  event: Jobs[] = [];

  constructor(private jobsService: JobsService) {}

  ngOnInit() {
    this.getJobsList();
  }

  private getJobsList() {
    this.jobsService.getJobs().subscribe(res => {
      console.log(res);
      for (const results of res) {
        this.event.push(results);
      }
    });
  }
}
