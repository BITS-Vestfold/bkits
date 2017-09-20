import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdToolbarModule} from '@angular/material';
import { FacebookModule, FacebookService} from 'ngx-facebook';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MainComponent } from './main/main.component';
import { AppRoutingModule} from './app-routing.module';
import { RouterModule} from '@angular/router';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './register/register.component';

import { AgmCoreModule } from '@agm/core';
import {ContactComponent} from "./contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EventsComponent,
    RegisterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    MdToolbarModule,
    FlexLayoutModule,
    FacebookModule.forRoot(),
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD46irjq1JQlXwhrjdjJGBKoeI8lgTboj8'
    })
  ],
  providers: [FacebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
