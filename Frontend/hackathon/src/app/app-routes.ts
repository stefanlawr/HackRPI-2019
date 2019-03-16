import {Routes} from '@angular/router';

import {CampusHubComponent} from './campus-hub/campus-hub.component';
import {InternshipsComponent} from './campus-hub/internships/internships.component';

export const routes: Routes = [{
  path: '',
  children: [
    {path: '', component: CampusHubComponent},
    {path: '', component: InternshipsComponent}
  ]
}];
