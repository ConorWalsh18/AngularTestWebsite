import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPageFourComponent } from './test-page-four.component';

describe('TestPageFourComponent', () => {
  let component: TestPageFourComponent;
  let fixture: ComponentFixture<TestPageFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPageFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
