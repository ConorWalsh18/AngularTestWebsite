import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'alternate-view',
  templateUrl: './alternate-view.component.html',
  styleUrls: ['./alternate-view.component.css'],
  animations: []
})
export class AlternateViewComponent implements OnInit {

  @Output() changeView = new EventEmitter();
  
  testPageOneState: string = "initial";
  testPageTwoState: string = "initial";
  testPageThreeState: string = "initial";
  disableRightArrow: boolean = false;
  disableLeftArrow: boolean = false;
  currentPage: string;

  constructor() { }

  ngOnInit() {
    this.disableArrowButtons(0);
    window.scroll({ top: 0 });
  }

  switchPage(page: string) {
    this.currentPage = page;

    switch (page) {
      case "homePage":
        this.disableLeftArrow = true;
        this.smoothScroll(0);
        break;
      case "testPageOne":
        this.smoothScroll(window.innerWidth);
        break;
      case "testPageTwo":
        this.smoothScroll(window.innerWidth * 2);
        break;
      case "testPageThree":
        this.smoothScroll(window.innerWidth * 3);
        break;
      case "testPageFour":
        this.smoothScroll(window.innerWidth * 4);
        break;
      case "testPageFive":
        this.disableRightArrow = true;
        this.smoothScroll(window.innerWidth * 5);
        break;
    }

    this.disableArrowButtons(1000);
  }

  smoothScroll(leftScroll: number) {
    if (window.scrollY > 0) {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
      setTimeout(() => {
        window.scroll({
          top: 0,
          left: leftScroll,
          behavior: 'smooth'
        });
      }, 600)
    }
    else {
      window.scroll({
        top: 0,
        left: leftScroll,
        behavior: 'smooth'
      });
    }
  }

  arrowButtonNavigation(direction: string) {
    //TODO: Change the logic for disabling the arrow buttons
    this.currentPage = "";
    
    if (direction === "forward") {
      window.scroll({
        top: 0,
        left: window.scrollX + window.innerWidth,
        behavior: 'smooth'
      });
    }
    else {
      window.scroll({
        top: 0,
        left: window.scrollX - window.innerWidth,
        behavior: 'smooth'
      });
    }

    this.disableArrowButtons(1000);
  }

  disableArrowButtons(timeout: number) {
    setTimeout(() => {
      console.log("window x = ", window.scrollX);
      console.log("window innerWidth = ", window.innerWidth);

      if (window.scrollX > window.innerWidth * 4 || this.currentPage === "testPageFive") {
        this.disableRightArrow = true;
        this.disableLeftArrow = false;
      }
      else if (window.scrollX === 0 || this.currentPage === "homePage") {
        this.disableLeftArrow = true;
        this.disableRightArrow = false;
      }
      else {
        this.disableRightArrow = this.disableLeftArrow = false;
      }
    }, timeout);
  }
}
