import {Component, OnInit} from '@angular/core';
import {FacebookService, InitParams} from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private fb: FacebookService) {
  }


  ngOnInit(): void {
    const initParams: InitParams = {
      appId: '709255365937283',
      xfbml: true,
      version: 'v2.8'
    };

    this.fb.init(initParams);
  }
}
