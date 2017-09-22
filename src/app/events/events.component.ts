import { Component, OnInit } from '@angular/core';
import {FacebookService, InitParams} from "ngx-facebook";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private fb: FacebookService) {
    const initParams: InitParams = {
      appId: '709255365937283',
      xfbml: true,
      version: 'v2.8'
    };

    this.fb.init(initParams);
  }

  ngOnInit() {
  }

}
