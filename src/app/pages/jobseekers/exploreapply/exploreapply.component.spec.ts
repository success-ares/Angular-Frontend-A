import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreapplyComponent } from './exploreapply.component';

describe('ExploreapplyComponent', () => {
  let component: ExploreapplyComponent;
  let fixture: ComponentFixture<ExploreapplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreapplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
