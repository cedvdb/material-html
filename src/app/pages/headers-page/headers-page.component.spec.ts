import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersPageComponent } from './headers-page.component';

describe('HeadersPageComponent', () => {
  let component: HeadersPageComponent;
  let fixture: ComponentFixture<HeadersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
