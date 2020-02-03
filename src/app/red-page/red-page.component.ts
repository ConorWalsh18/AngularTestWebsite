import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'red-page',
  templateUrl: './red-page.component.html',
  styleUrls: ['./red-page.component.css'],
  animations: [
    trigger('topPanelOpenClose', [
      state('open', style({ transform: 'translateY(0%)' })),
      state('close', style({ transform: 'translateY(-100%)' })),
      transition('* <=> *', [animate('0.6s ease-in-out')])
    ]),
    trigger('bottomPanelOpenClose', [
      state('open', style({ transform: 'translateY(100%)' })),
      state('close', style({ transform: 'translateY(200%)' })),
      transition('* <=> *', [animate('0.6s ease-in-out')])
    ])
  ]
})
export class RedPageComponent implements OnInit {

  @Output() closeRedPage = new EventEmitter();

  openClose: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
