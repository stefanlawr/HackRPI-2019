import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CampusHubComponent} from './campus-hub/campus-hub.component';
import {ClubsComponent} from './campus-hub/clubs/clubs.component';
import {InternshipsComponent} from './campus-hub/internships/internships.component';
import {JobsComponent} from './campus-hub/jobs/jobs.component';
import {PageNotFoundComponent} from './campus-hub/page-not-found/page-not-found.component';
import {ScholarshipsComponent} from './campus-hub/scholarships/scholarships.component';
import {StudentsComponent} from './campus-hub/students/students.component';
import {NavComponent} from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent, NavComponent, CampusHubComponent, InternshipsComponent,
    ScholarshipsComponent, JobsComponent, ClubsComponent, PageNotFoundComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
