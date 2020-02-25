import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPageFiveComponent } from './test-page-five.component';

describe('TestPageFiveComponent', () => {
  let component: TestPageFiveComponent;
  let fixture: ComponentFixture<TestPageFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPageFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPageFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
