import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-page-two',
  templateUrl: './test-page-two.component.html',
  styleUrls: ['./test-page-two.component.css']
})
export class TestPageTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  traversePage(direction: string) {
    if (direction === "down") {
      window.scroll({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
    else {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
