import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticesViewportComponent } from './notices-viewport.component';

describe('NoticesViewportComponent', () => {
  let component: NoticesViewportComponent;
  let fixture: ComponentFixture<NoticesViewportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticesViewportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticesViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
