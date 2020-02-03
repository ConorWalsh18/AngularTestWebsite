import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternateViewComponent } from './alternate-view.component';

describe('AlternateViewComponent', () => {
  let component: AlternateViewComponent;
  let fixture: ComponentFixture<AlternateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
