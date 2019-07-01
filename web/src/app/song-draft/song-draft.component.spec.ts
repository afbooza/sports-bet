import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import { SongDraftComponent } from './song-draft.component';

describe('SongDraftComponent', () => {
  let component: SongDraftComponent;
  let fixture: ComponentFixture<SongDraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongDraftComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
