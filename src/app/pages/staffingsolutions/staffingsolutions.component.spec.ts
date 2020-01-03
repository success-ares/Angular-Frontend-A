import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingsolutionsComponent } from './staffingsolutions.component';

describe('StaffingsolutionsComponent', () => {
  let component: StaffingsolutionsComponent;
  let fixture: ComponentFixture<StaffingsolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffingsolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffingsolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
