import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  members: any[] = [
    {name: 'Odin Van der Hultgren Horst', dateOfBirth: '11.07.1992'},
    {name: 'Even Flem Hagen', dateOfBirth: '03.07.1992'},
    {name: 'Lars Ådne Heimdal', dateOfBirth: '03.07.1992'},
    {name: 'Peter Gustad', dateOfBirth: '03.07.1992'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
