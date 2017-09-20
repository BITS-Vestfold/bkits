import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  sponsorImgs : any[] = [
    {name: 'Syse', imgSrc: 'https://www.syse.no/assets/SYSE_logo_darkText_300x113.png'},
    {name: 'Microsoft Norge', imgSrc: 'https://www.csra.com/sites/default/files/microsoft_logo.png'},
    {name: 'Tesla Motors', imgSrc: 'http://www.car-brand-names.com/wp-content/uploads/2015/05/Tesla-Motors-logo-3.jpg'},
    {name: 'Valve', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Valve_logo.svg/2000px-Valve_logo.svg.png'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
