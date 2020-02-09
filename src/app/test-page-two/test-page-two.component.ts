import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group
} from '@angular/animations';

@Component({
  selector: 'test-page-two',
  templateUrl: './test-page-two.component.html',
  styleUrls: ['./test-page-two.component.css'],
  animations: [ 
    trigger('moveArrow', [
      state('goDown', style({ top: '138%' })),
      state('goUp', style({ top: '51%' })),
      //state('hideGoDown', style({ top: '144%', opacity: 0})),
      transition('* <=> *', [animate('0.6s ease-in-out')])
    ]),
    trigger('moveArrowBody', [
      state('goDown', style({ height: '88%', transform: 'translate(-50%, 0%)' })),
      state('goUp', style({ height: '89%', top: '95%' })),
      //state('hideGoDown', style({ height: '1080px', transform: 'translate(-50%, 0%)', opacity: 0 })),
      transition('* <=> *', [animate('0.6s ease-in-out')])
    ])
  ]
})
export class TestPageTwoComponent implements OnInit {

  moveArrow: string = "hide";

  constructor() { }

  ngOnInit() {
  }

  traversePage(direction: string) {
    if (direction === "down") {
      this.moveArrow = "goDown";
      window.scroll({
        top: window.innerHeight,
        behavior: 'smooth'
      });

      //setTimeout(() => {
      //  this.moveArrow = "hideGoDown";
      //}, 600);
    }
    else {
      this.moveArrow = "goUp";      
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
