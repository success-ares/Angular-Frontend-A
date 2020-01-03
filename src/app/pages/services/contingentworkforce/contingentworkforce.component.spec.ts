import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContingentworkforceComponent } from './contingentworkforce.component';

describe('ContingentworkforceComponent', () => {
  let component: ContingentworkforceComponent;
  let fixture: ComponentFixture<ContingentworkforceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContingentworkforceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContingentworkforceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
