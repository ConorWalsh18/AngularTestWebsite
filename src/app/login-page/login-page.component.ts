import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @Output() changeView = new EventEmitter();
  
  user: User = new User();
  showCreateAccountInfo: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    //TODO: Add error messages and validation checks
  }

  login() {
    console.log(this.user);

    this.apiService.getUser(this.user).subscribe((user: User) => {
      if (user != null && user.userName != "" && user.password != "") {
        this.changeView.emit(user);
      }
    });
  }

  accountSetup() {
    this.user = new User();
    this.showCreateAccountInfo = true;
  }

  createAccount() {
    //TODO: Add validation (i.e. check if the username already exists)
    this.apiService.createUser(this.user).subscribe((user: User) => { 
      this.user = new User();
      this.showCreateAccountInfo = false;
    });
  }
}
