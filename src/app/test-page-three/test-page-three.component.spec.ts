import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPageThreeComponent } from './test-page-three.component';

describe('TestPageThreeComponent', () => {
  let component: TestPageThreeComponent;
  let fixture: ComponentFixture<TestPageThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPageThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
