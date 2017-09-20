import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdToolbarModule} from '@angular/material';
import { FacebookModule, FacebookService} from 'ngx-facebook';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MainComponent } from './main/main.component';
import { AppRoutingModule} from "./app-routing.module";
import { RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    MdToolbarModule,
    FlexLayoutModule,
    FacebookModule.forRoot(),
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [FacebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
