import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  last_known_scroll_position = 0;
  ticking = false;
  compArray: number[] = [20];
  currentIndex = 0;

  constructor() {
    window.addEventListener('scroll', (e) => {
      this.last_known_scroll_position = window.scrollY;
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.doSomething(this.last_known_scroll_position);
          this.ticking = false;
        });
      }
      this.ticking = true;
    });
  }

  doSomething(position: any) {
    console.log('hello');
  }

  ngOnInit() {
  }

}
