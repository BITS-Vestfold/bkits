import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnInit {

  @Output() onOpenStart = new EventEmitter<void>();
  @Output() onCloseStart = new EventEmitter<void>();
  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    if (this.isOpen) {
      this.onCloseStart.emit();
    } else {
      this.onOpenStart.emit();
    }

    this.isOpen = !this.isOpen;

  }

  sidenavClose() {
    this.onCloseStart.emit();
    this.isOpen = false;
  }
}

