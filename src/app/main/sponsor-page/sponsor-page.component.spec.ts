import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorPageComponent } from './sponsor-page.component';

describe('SponsorPageComponent', () => {
  let component: SponsorPageComponent;
  let fixture: ComponentFixture<SponsorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
