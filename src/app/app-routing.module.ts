
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from "./main/main.component";
import {EventsComponent} from "./events/events.component";

const appRoutes: Routes = [
  {path: 'event', component: EventsComponent },
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
