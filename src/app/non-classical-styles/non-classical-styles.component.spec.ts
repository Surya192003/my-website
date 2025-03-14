import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonClassicalStylesComponent } from './non-classical-styles.component';

describe('NonClassicalStylesComponent', () => {
  let component: NonClassicalStylesComponent;
  let fixture: ComponentFixture<NonClassicalStylesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonClassicalStylesComponent]
    });
    fixture = TestBed.createComponent(NonClassicalStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
