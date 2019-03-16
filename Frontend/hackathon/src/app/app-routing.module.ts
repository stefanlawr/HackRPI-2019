import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './app-routes';

// const routes: Routes = [];

@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})
export class AppRoutingModule {
}
