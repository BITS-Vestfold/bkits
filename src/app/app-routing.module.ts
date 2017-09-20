
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from "./main/main.component";
import {EventsComponent} from "./events/events.component";
import {RegisterComponent} from "./register/register.component";

const appRoutes: Routes = [
  {path: 'events', component: EventsComponent },
  {path: 'bli-medlem', component: RegisterComponent },
  {path: '', component: MainComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
