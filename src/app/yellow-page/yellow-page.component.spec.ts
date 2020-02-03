import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowPageComponent } from './yellow-page.component';

describe('YellowPageComponent', () => {
  let component: YellowPageComponent;
  let fixture: ComponentFixture<YellowPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YellowPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
