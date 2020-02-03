import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-splashpage',
  templateUrl: './splashpage.component.html',
  styleUrls: ['./splashpage.component.css'],
  animations: [
    trigger('topLeftPanel', [
      state('open', style({ transform: 'translateX(0%) translateY(0%)' })),
      state('closed', style({ transform: 'translateX(-100%) translateY(-100%)' })),
      transition('* <=> *', [ animate('0.7s ease-in-out') ])
    ]),
    trigger('topRightPanel', [
      state('open', style({ transform: 'translateX(0%) translateY(0%)' })),
      state('closed', style({ transform: 'translateX(100%) translateY(-100%)' })),
      transition('* <=> *', [ animate('0.7s ease-in-out') ])
    ]),
    trigger('bottomLeftPanel', [
      state('open', style({ transform: 'translateX(0%) translateY(0%)' })),
      state('closed', style({ transform: 'translateX(-100%) translateY(100%)' })),
      transition('* <=> *', [ animate('0.7s ease-in-out') ])
    ]),
    trigger('bottomRightPanel', [
      state('open', style({ transform: 'translateX(0%) translateY(0%)' })),
      state('closed', style({ transform: 'translateX(100%) translateY(100%)' })),
      transition('* <=> *', [ animate('0.7s ease-in-out') ])
    ]),
    trigger('spinButton', [
      state('open', style({ transform: 'rotate(45deg)', opacity: 1 })),
      state('closed', style({ transform: 'rotate(405deg)', opacity: 0 })),
      transition('* <=> *', [ animate('0.7s ease-in-out') ])
    ])
  ]
})

export class SplashpageComponent implements OnInit {

  constructor() { }

  @Output() showMainPage = new EventEmitter();
  @Output() hideMainPage = new EventEmitter();

  isOpen: boolean = true;
  showResetButton: boolean = false;

  ngOnInit() {
  }

  open() {
    this.isOpen = !this.isOpen;

    setTimeout(() => {
      this.showResetButton = !this.showResetButton;
      this.showMainPage.emit();
    }, 600);
  }

  reset() {
    this.isOpen = !this.isOpen;
    this.showResetButton = !this.showResetButton;
    this.hideMainPage.emit();
  }
}
