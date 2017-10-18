import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsor-page',
  templateUrl: './sponsor-page.component.html',
  styleUrls: ['./sponsor-page.component.scss']
})
export class SponsorPageComponent implements OnInit {

  sponsorImgs : any[] = [
    {name: 'Syse', imgSrc: 'https://www.syse.no/assets/SYSE_logo_darkText_300x113.png'},
    {name: 'Microsoft Norge', imgSrc: 'https://www.csra.com/sites/default/files/microsoft_logo.png'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
