import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group
} from '@angular/animations';
declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('showContent', [
      state('show', style({ opacity: 1 })),
      state('hide', style({ opacity: 0 })),
      transition('* <=> *', [animate('0.7s ease-in-out')])
    ]),

    //Move dots
    trigger('moveYellowDot', [
      state('start', style({})),
      state('end', style({ top: '25%', right: '-9%' })),
      transition('* <=> *', [animate('0.8s ease-in-out')])
    ]),
    trigger('moveRedDot', [
      state('start', style({})),
      state('end', style({ top: '77%', right: '8%' })),
      transition('* <=> *', [animate('0.8s ease-in-out')])
    ]),
    trigger('movePurpleDot', [
      state('start', style({})),
      state('end', style({ top: '77%', right: '70%' })),
      transition('* <=> *', [animate('0.8s ease-in-out')])
    ]),
    trigger('movePinkDot', [
      state('start', style({})),
      state('end', style({ top: '25%', right: '88%' })),
      transition('* <=> *', [animate('0.8s ease-in-out')])
    ]),

    //Page navigation transitions
    trigger('goToGreenPage', [
      transition('* => animate', [
        group([
          query('.green-dot', animate('0.7s ease-in-out', style({
            height: '100%',
            width: '100%',
            borderRadius: 'unset',
            top: '0%',
            left: '0%',
            transform: 'none'
          })), { optional: true }),
          query('i', animate('0.7s ease-out', style({ fontSize: '250px' }))),
        ])
      ])
    ])
  ]
})

export class MainComponent implements OnInit {

  @Output() navigateToGreenPage = new EventEmitter();

  moveDots: boolean = true;
  showIcons: boolean = false;
  goToGreenPage: boolean = false;
  goToYellowPage: boolean = false;
  showRedPage: boolean = false;
  centerCircleMessage: string = "Select an icon";

  constructor() { }

  ngOnInit() {

  }

  buttonHover(hover: boolean, page: string = null) {
    this.centerCircleMessage = hover ? page : "Select an icon";
  }

  showAllIcons() {
    setTimeout(() => {
      this.showIcons = true;
    }, 0);
  }

  showGreenPage() {
    this.goToGreenPage = true;

    setTimeout(() => {
      this.goToGreenPage = false;
      this.navigateToGreenPage.emit();
    }, 650);
  }

  showYellowPage() {
    this.goToYellowPage = true;
  }
}
