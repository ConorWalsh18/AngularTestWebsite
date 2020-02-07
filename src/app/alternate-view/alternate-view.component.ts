import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'alternate-view',
  templateUrl: './alternate-view.component.html',
  styleUrls: ['./alternate-view.component.css'],
  animations: []
})
export class AlternateViewComponent implements OnInit {

  testPageOneState: string = "initial";
  testPageTwoState: string = "initial";
  testPageThreeState: string = "initial";

  constructor() { }

  ngOnInit() {
    //var testPolicy = new Policy();
    //testPolicy.id = 1;
    //testPolicy.number = 100;
    //testPolicy.amount = 1000;

    //this.apiService.createPolicy(testPolicy).subscribe((policy: Policy)=>{
    //  console.log("Policy created, ", policy);
    //});

    //this.apiService.readPolicies().subscribe((policies: Policy[]) => {
    //  this.policies = policies;
    //  console.log(this.policies);
    //})

    window.scroll({
      top: 0
    });
  }

  switchPage(page: string) {
    switch (page) {
      case "homePage":
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        break;
      case "testPageOne":
        window.scroll({
          top: 0,
          left: window.innerWidth,
          behavior: 'smooth'
        });
        break;
      case "testPageTwo":
        window.scroll({
          top: 0,
          left: window.innerWidth * 2,
          behavior: 'smooth'
        });
        break;
      case "testPageThree":
        if (window.scrollY > 0) {
          window.scroll({
            top: 0,
            behavior: 'smooth'
          });
          setTimeout(() => {
            window.scroll({
              top: 0,
              left: window.innerWidth * 3,
              behavior: 'smooth'
            });
          }, 600)
        }
        else {
          window.scroll({
            top: 0,
            left: window.innerWidth * 3,
            behavior: 'smooth'
          });
        }
        break;
      case "testPageFour":
        window.scroll({
          top: 0,
          left: window.innerWidth * 4,
          behavior: 'smooth'
        });
        break;
      case "testPageFive":
        window.scroll({
          top: 0,
          left: window.innerWidth * 5,
          behavior: 'smooth'
        });
        break;
    }
  }
}
