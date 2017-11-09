import {Component, Input, OnInit} from '@angular/core';
import {SidenavComponent} from "../sidenav/sidenav.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() sidenav: SidenavComponent;

  constructor() { }

  ngOnInit() {
  }

}
