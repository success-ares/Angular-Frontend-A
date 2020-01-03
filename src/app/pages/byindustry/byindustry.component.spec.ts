import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByindustryComponent } from './byindustry.component';

describe('ByindustryComponent', () => {
  let component: ByindustryComponent;
  let fixture: ComponentFixture<ByindustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByindustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByindustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
