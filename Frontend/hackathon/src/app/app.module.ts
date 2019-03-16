import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CampusHubComponent } from './campus-hub/campus-hub.component';
import { InternshipsComponent } from './campus-hub/internships/internships.component';
import { ScholarshipsComponent } from './campus-hub/scholarships/scholarships.component';
import { JobsComponent } from './campus-hub/jobs/jobs.component';
import { ClubsComponent } from './campus-hub/clubs/clubs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CampusHubComponent,
    InternshipsComponent,
    ScholarshipsComponent,
    JobsComponent,
    ClubsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
