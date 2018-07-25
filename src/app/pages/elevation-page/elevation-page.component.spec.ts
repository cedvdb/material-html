import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevationPageComponent } from './elevation-page.component';

describe('ElevationPageComponent', () => {
  let component: ElevationPageComponent;
  let fixture: ComponentFixture<ElevationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
