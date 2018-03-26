import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  members: any[] = [

    {name: 'Sarushan Vamathevan', dateOfBirth: '03.07.1992'},
    {name: 'Petter Duuuus Berven', dateOfBirth: '03.04.1995'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
