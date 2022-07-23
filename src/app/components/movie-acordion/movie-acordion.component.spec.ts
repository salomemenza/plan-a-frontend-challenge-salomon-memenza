import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAcordionComponent } from './movie-acordion.component';

describe('MovieAcordionComponent', () => {
  let component: MovieAcordionComponent;
  let fixture: ComponentFixture<MovieAcordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieAcordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieAcordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
