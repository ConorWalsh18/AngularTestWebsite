import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'yellow-page',
  templateUrl: './yellow-page.component.html',
  styleUrls: ['./yellow-page.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({ transform: 'translateX(0%)' })),
      state('close', style({ transform: 'translateX(100%)' })),
      transition('* <=> *', [animate('0.6s ease-in-out')])
    ])
  ]
})
export class YellowPageComponent implements OnInit {

  @Output() closeYellowPage = new EventEmitter();

  openClose: boolean = true;

  constructor() { }

  ngOnInit() {

  }

}
