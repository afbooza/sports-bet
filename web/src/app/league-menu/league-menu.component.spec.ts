import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueMenuComponent } from './league-menu.component';

describe('LeagueMenuComponent', () => {
  let component: LeagueMenuComponent;
  let fixture: ComponentFixture<LeagueMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
