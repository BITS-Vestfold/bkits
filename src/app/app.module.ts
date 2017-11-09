import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FacebookModule, FacebookService} from 'ngx-facebook';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MainComponent } from './main/main.component';
import { AppRoutingModule} from './app-routing.module';
import { RouterModule} from '@angular/router';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './register/register.component';

import { AgmCoreModule } from '@agm/core';
import {ContactComponent} from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { FacebookPageComponent } from './main/facebook-page/facebook-page.component';
import { SponsorPageComponent } from './main/sponsor-page/sponsor-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EventsComponent,
    RegisterComponent,
    ContactComponent,
    HeaderComponent,
    AboutUsComponent,
    FooterComponent,
    FacebookPageComponent,
    SponsorPageComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FacebookModule.forRoot(),
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
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
