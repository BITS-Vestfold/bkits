import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  members: any[] = [
    {name: 'Odin Van der Hultgren Horst', dateOfBirth: '03.07.1992'},
    {name: 'Odin Van der Hultgren Horst', dateOfBirth: '03.07.1992'},
    {name: 'Even Flem Hagen', dateOfBirth: '03.07.1992'},
    {name: 'Even Flem Hagen', dateOfBirth: '03.07.1992'},
    {name: 'Lars Ådne Heimdal', dateOfBirth: '03.07.1992'},
    {name: 'Lars Ådne Heimdal', dateOfBirth: '03.07.1992'},
    {name: 'Peter Gustad', dateOfBirth: '03.07.1992'},
    {name: 'Peter Gustad', dateOfBirth: '03.07.1992'},
  ];

  constructor() { }


  ngOnInit() {
  }

}
