import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'test-page-five',
  templateUrl: './test-page-five.component.html',
  styleUrls: ['./test-page-five.component.css']
})
export class TestPageFiveComponent implements OnInit {

  @Output() changeView = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  switchView() {
    this.changeView.emit();
  }
}
