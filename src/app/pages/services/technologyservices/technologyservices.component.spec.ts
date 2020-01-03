import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyservicesComponent } from './technologyservices.component';

describe('TechnologyservicesComponent', () => {
  let component: TechnologyservicesComponent;
  let fixture: ComponentFixture<TechnologyservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
