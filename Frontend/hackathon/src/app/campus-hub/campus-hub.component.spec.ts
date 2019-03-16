import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusHubComponent } from './campus-hub.component';

describe('CampusHubComponent', () => {
  let component: CampusHubComponent;
  let fixture: ComponentFixture<CampusHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
