import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreServicesSectionComponent } from './more-services-section.component';

describe('MoreServicesSectionComponent', () => {
  let component: MoreServicesSectionComponent;
  let fixture: ComponentFixture<MoreServicesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreServicesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreServicesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
