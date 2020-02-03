import { Component, OnInit, HostBinding, EventEmitter, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group,
  animateChild,
  stagger,
  sequence
} from '@angular/animations';

@Component({
  selector: 'green-page',
  templateUrl: './green-page.component.html',
  styleUrls: ['./green-page.component.css'],
  animations: [
    trigger('moveUserIcon', [
      state('move', style({ left: '10%' })),
      transition('* <=> *', [animate('0.7s ease-in-out')])
    ]),

    trigger('showContent', [
      transition('* => animate', [
        query('p-card, .user-accordion', [
          style({ opacity: 0 }),
          stagger(300, [
            animate('300ms ease-in', style({ opacity: 1 }))
          ]),
        ])
      ])
    ]),

    trigger('shrinkPage', [
      state('normal', style({})),
      state('shrink', style({
        position: 'absolute',
        height: '90px',
        width: '90px',
        borderRadius: '50%',
        display: 'inline-block',
        borderStyle: 'solid',
        borderWidth: 'thin',
        borderColor: 'gray',
        transform: 'translate(-43px, -237px)',
        top: '50%',
        left: '50%'
      })),
      transition('* <=> *', [animate('0.7s ease-in-out')])
    ]),
  ]
})
export class GreenPageComponent implements OnInit {

  @Output() goHome = new EventEmitter();

  userCards: any[];
  showContent: boolean = false;
  moveUserIcon: boolean = true;
  shrinkPage: boolean = false;

  constructor() { }

  ngOnInit() {
    this.userCards = [
      { header: "User Card 1", subHeader: "TypeScript Card", image: "https://pantheon.io/sites/default/files/field/image/TypeScriptImage.jpeg" },
      { header: "User Card 2", subHeader: "Angular Card", image: "https://i.ytimg.com/vi/5_IC_ZJrVMg/maxresdefault.jpg" },
      { header: "User Card 3", subHeader: "PrimeNG Card", image: "https://miro.medium.com/max/730/1*LnaOsI2hSr9Eid2Y4O13IQ.jpeg" }
    ];

    setTimeout(() => {
      this.showContent = true;
    }, 700);
  }

  reset() {
    this.shrinkPage = true;

    setTimeout(() => {
      this.goHome.emit();
    }, 700);
  }
}
