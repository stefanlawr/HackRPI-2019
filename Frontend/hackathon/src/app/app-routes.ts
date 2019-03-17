import {Routes} from '@angular/router';

import {CampusHubComponent} from './campus-hub/campus-hub.component';
import {ClubsComponent} from './campus-hub/clubs/clubs.component';
import {InternshipsComponent} from './campus-hub/internships/internships.component';
import {JobsComponent} from './campus-hub/jobs/jobs.component';
import {PageNotFoundComponent} from './campus-hub/page-not-found/page-not-found.component';
import {ScholarshipsComponent} from './campus-hub/scholarships/scholarships.component';
import {StudentsComponent} from './campus-hub/students/students.component';

export const routes: Routes = [{
  path: '',
  children: [
    {path: '', component: CampusHubComponent},
    {path: 'internships', component: InternshipsComponent},
    {path: 'scholarships', component: ScholarshipsComponent},
    {path: 'jobs', component: JobsComponent},
    {path: 'clubs', component: ClubsComponent},
    {path: 'students', component: StudentsComponent},
    {path: '**', component: PageNotFoundComponent},
  ]
}];
