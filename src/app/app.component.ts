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
import { User } from './user';

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
  loggedIn: boolean = false;
  loggedInUser: User;
  showMainPage: boolean = false;
  showAlternateView: boolean = true;
  showGreenPage: boolean = false;

  ngOnInit() {
    //TEMP
    document.getElementsByTagName("body")[0].style.backgroundColor = "deepskyblue";
    document.getElementsByTagName("body")[0].style.width = "100%";
  }

  handleLogin(user: User) {
    this.loggedInUser = user;
    this.loggedIn = true;
    this.switchView('alternate');
  }

  switchView(view: string) {
    switch (view) {
      case "main":
        this.showAlternateView = false;
        this.showMainPage = false;  
        setTimeout(() => {
          document.getElementsByTagName("body")[0].style.backgroundColor = "deepskyblue";
          document.getElementsByTagName("body")[0].style.width = "100%";
        }, 700);
        break;
      case "alternate":
        this.showMainPage = false;
        this.showAlternateView = true;
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
        document.getElementsByTagName("body")[0].style.width = "600%";
        break;
      case "logout":
        this.loggedIn = false;
        document.getElementsByTagName("body")[0].style.backgroundColor = "deepskyblue";
        document.getElementsByTagName("body")[0].style.width = "100%";
        break;
    }
  }
}
