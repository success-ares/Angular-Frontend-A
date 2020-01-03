import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByindustrytechnologyservicesComponent } from './byindustrytechnologyservices.component';

describe('ByindustrytechnologyservicesComponent', () => {
  let component: ByindustrytechnologyservicesComponent;
  let fixture: ComponentFixture<ByindustrytechnologyservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByindustrytechnologyservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByindustrytechnologyservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
