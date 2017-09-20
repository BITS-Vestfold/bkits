
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from "./main/main.component";
import {EventsComponent} from "./events/events.component";
import {RegisterComponent} from "./register/register.component";
import {ContactComponent} from "./contact/contact.component";

const appRoutes: Routes = [
  {path: 'events', component: EventsComponent },
  {path: 'bli-medlem', component: RegisterComponent },
  {path: 'kontakt', component: ContactComponent },
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
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
