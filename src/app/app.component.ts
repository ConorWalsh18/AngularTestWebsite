import { Component, Input, OnInit } from '@angular/core';
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('showContent', [
      state('show', style({ opacity: 1 })),
      state('hide', style({ opacity: 0 })),
      transition('* <=> *', [animate('0.7s ease-in-out')])
    ])
  ]
})

export class AppComponent implements OnInit {
  showMainPage: boolean = false;
  showAlternateView: boolean = true;
  showGreenPage: boolean = false;

  ngOnInit() {
    
  }

  switchView(view: string) {
    if (view === "main") {
      this.showAlternateView = false;
      this.showMainPage = false;

      setTimeout(() => {
        document.getElementsByTagName("body")[0].style.backgroundColor = "deepskyblue";
        document.getElementsByTagName("body")[0].style.width = "100%";
      }, 700);
    }
    else if (view === "alternate") {
      this.showMainPage = false;
      this.showAlternateView = true;

      document.getElementsByTagName("body")[0].style.backgroundColor = "white";
      document.getElementsByTagName("body")[0].style.width = "600%";
    }
  }
}
