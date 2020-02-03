import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenPageComponent } from './green-page.component';

describe('GreenPageComponent', () => {
  let component: GreenPageComponent;
  let fixture: ComponentFixture<GreenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
