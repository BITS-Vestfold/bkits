import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsor-page',
  templateUrl: './sponsor-page.component.html',
  styleUrls: ['./sponsor-page.component.scss']
})
export class SponsorPageComponent implements OnInit {

  sponsorImgs : any[] = [
    {name: 'Syse', imgSrc: 'https://www.syse.no/assets/SYSE_logo_darkText_300x113.png'},
    {name: 'Microsoft Norge', imgSrc: 'https://www.csra.com/sites/default/files/microsoft_logo.png'},
    {name: 'Tesla Motors', imgSrc: 'https://www.blog.google/images/download/DvujqGIr46dew-phGARpDy8bMSQ=/1095/original/Google_Logo.png'},
    {name: 'Valve', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Valve_logo.svg/2000px-Valve_logo.svg.png'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
