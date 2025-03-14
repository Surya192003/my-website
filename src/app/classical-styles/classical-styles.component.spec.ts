import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicalStylesComponent } from './classical-styles.component';

describe('ClassicalStylesComponent', () => {
  let component: ClassicalStylesComponent;
  let fixture: ComponentFixture<ClassicalStylesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassicalStylesComponent]
    });
    fixture = TestBed.createComponent(ClassicalStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
