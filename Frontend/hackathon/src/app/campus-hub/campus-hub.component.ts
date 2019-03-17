import { Component, OnInit } from '@angular/core';

import { SECTIONS } from './campus-hub.sections';

@Component({
  selector: 'app-campus-hub',
  templateUrl: './campus-hub.component.html',
  styleUrls: ['./campus-hub.component.scss']
})
export class CampusHubComponent implements OnInit {
  title = 'College Hub';

  sections = SECTIONS;

  constructor() {}

  ngOnInit() {}
}
