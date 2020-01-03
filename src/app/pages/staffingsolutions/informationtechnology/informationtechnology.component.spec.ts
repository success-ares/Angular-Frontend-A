import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationtechnologyComponent } from './informationtechnology.component';

describe('InformationtechnologyComponent', () => {
  let component: InformationtechnologyComponent;
  let fixture: ComponentFixture<InformationtechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationtechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationtechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
