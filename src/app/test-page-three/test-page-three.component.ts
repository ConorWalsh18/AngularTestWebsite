import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'test-page-three',
  templateUrl: './test-page-three.component.html',
  styleUrls: ['./test-page-three.component.css'],
  animations: [
    trigger('biteTopHalf', [
      state('initial', style({ top: '30%' })),
      state('openMouth', style({ top: '27%' })),
      state('closeMouth', style({ top: '42%' })),
      transition('initial => openMouth, closeMouth => initial', [animate('0.4s ease-in-out')]),
      transition('openMouth => closeMouth', [animate('0.2s ease-in-out')])
    ]),
    trigger('biteBottomHalf', [
      state('initial', style({ top: '65%' })),
      state('openMouth', style({ top: '68%' })),
      state('closeMouth', style({ top: '56%' })),
      transition('initial => openMouth, closeMouth => initial', [animate('0.4s ease-in-out')]),
      transition('openMouth => closeMouth', [animate('0.2s ease-in-out')])
    ]),
  ]
})
export class TestPageThreeComponent implements OnInit {

  bite: string = "initial";
  biteButtonOnTop: boolean = true;

  constructor() { }

  ngOnInit() {

  }

  biteButton(reset: boolean) {
    if (reset) {
      this.bite = "initial";
      setTimeout(() => {
        this.biteButtonOnTop = true;
      }, 400)
    }
    else {
      this.biteButtonOnTop = false;
      this.bite = "openMouth";
      setTimeout(() => {
        this.bite = "closeMouth"
      }, 400)
    }
  }
}
