import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreResultsComponent } from './score-results.component';

describe('ScoreResultsComponent', () => {
  let component: ScoreResultsComponent;
  let fixture: ComponentFixture<ScoreResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
