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
  selector: 'test-page-one',
  templateUrl: './test-page-one.component.html',
  styleUrls: ['./test-page-one.component.css'],
  animations: [
    //Show icons
    trigger('showContent', [
      state('show', style({ opacity: 1 })),
      state('hide', style({ opacity: 0 })),
      transition('* <=> *', [animate('0.6s ease-in-out')])
    ]),

    //Move dots
    trigger('moveWaterDot', [
      state('move', style({ top: '-8%' })),
      transition('* <=> *', [animate('0.8s ease-in-out')])
    ]),
    trigger('moveEarthDot', [
      state('move', style({ top: '42.7%', right: '-7.6%' })),
      transition('* <=> *', [animate('0.8s ease-in-out')])
    ]),
    trigger('moveFireDot', [
      state('move', style({ top: '92%' })),
      transition('* <=> *', [animate('0.8s ease-in-out')])
    ]),
    trigger('moveAirDot', [
      state('move', style({ top: '42.7%', right: '93%' })),
      transition('* <=> *', [animate('0.8s ease-in-out')])
    ]),

    //Grow middle dot
    trigger('growMiddleDot', [
      state('shrink', style({ height: '0px', width: '0px' })),
      state('grow', style({ height: '900px', width: '900px' })),
      transition('* <=> *', [animate('0.6s ease-in-out')])
    ])
  ]
})
export class TestPageOneComponent implements OnInit {

  showIcons: boolean = false;
  showmiddleDotClosedTitle: boolean = false;
  showElementText: boolean = false;
  moveDots: string = "move";
  growDot: boolean = false;
  middleDotColor: string;
  middleDotClosedTitle: string = "Elements";
  middleDotOpenTitle: string;
  elementText: string;

  constructor() { }

  ngOnInit() {

  }

  buttonHover(hover: boolean, page: string = null) {
    this.middleDotClosedTitle = hover ? page : "Elements";
  }

  changeMiddleDot(color: string, element: string) {
    this.showElementText = false;

    //If another element is clicked while the middle dot is open, close it and reopen it with the new color
    if (this.growDot && this.middleDotColor != color) {
      this.growDot = false;
      setTimeout(() => {
        this.growDot = true;
        this.middleDotColor = color;
        this.assignElementText(element);
      }, 600)
    }
    //If the middle dot is open and the original element that opened it was clicked again, close the middle dot
    else if (this.growDot && this.middleDotColor === color) {
      this.growDot = false;
    }
    else {
      this.growDot = true;
      this.middleDotColor = color;
      this.assignElementText(element);
    }
  }

  assignElementText(element: string) {
    setTimeout(() => {
      this.showElementText = true;
    }, 300)

    this.middleDotOpenTitle = element;
    if (element === "water") {
      this.elementText = "Waterbending is practiced by some people of the Water Tribe. A versatile element, it is unique in the sense that the original bender of the element wasn't an animal, but rather the Moon. Similar to their element, waterbenders are extremely adaptable and versatile. Waterbending concentrates on the flow of energy, focusing less on strength and more on turning the opponent's own energy against them. While a bender's victory in battle depends on their skill or ingenuity, waterbenders gain a serious advantage or disadvantage depending on the amount of water around them, although highly skilled waterbenders can draw water from anywhere, such as draw humidity from the air and bend the water in living things, especially plants.";
    }
    else if (element === "earth") {
      this.elementText = "Earthbending originates in the Earth Kingdom and the first earthbenders were badgermoles. It demands a special connection with the earth that is achievable with neutral jing, listening, though seemingly doing nothing and waiting for the right moment to strike. Like waterbenders, earthbenders gain an advantage or disadvantage in battle based on the amount of earth around them, though the conditions aren't as extreme. Because of their element's stability and its stress on neutral jing, earthbenders stand their ground, absorbing or intercepting attacks until they completely overwhelm their opponents.";
    }
    else if (element === "fire") {
      this.elementText = "Firebending is used by the people of the Fire Nation and is the most aggressive bending art. Dragons were the first firebenders; they subsequently taught the Sun Warriors. For a long time, disciplines of firebending were taught to be fueled by hatred, as opposed to the original source. As the element of power, firebenders have to be able to maintain a constant source of energy and balance in battle, unleashing a volley of direct, successive attacks. Unlike other benders who depend on external sources of their elements to bend, firebenders can create fire using their internal heat source in addition to controlling already existent flames."
    }
    else if (element === "air") {
      this.elementText = "Airbending is the bending art used by the Air Nomads; the flying bison were the original airbenders.It concentrates on speed and evasion, forgoing a strong offense for a greater defense.Though apparently lacking fatal finishing moves, it is the most dynamic of all the bending arts.As the element of freedom, airbenders use their capability to bend unencumbered by the ground or any other environmental factors and use their own momentum as a weapon, evading attacks with astounding agility to tire their opponents out or building up massive inertia for explosive gusts of wind to make their counterattacks finishing moves.";
    }
  }

  showAllIcons() {
    setTimeout(() => {
      this.showIcons = this.showmiddleDotClosedTitle = true;
    }, 0);
  }
}
