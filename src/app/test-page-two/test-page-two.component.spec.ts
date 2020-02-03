import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPageTwoComponent } from './test-page-two.component';

describe('TestPageTwoComponent', () => {
  let component: TestPageTwoComponent;
  let fixture: ComponentFixture<TestPageTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPageTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
