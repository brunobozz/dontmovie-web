import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListCategoriesComponent } from './movie-list-categories.component';

describe('MovieListCategoriesComponent', () => {
  let component: MovieListCategoriesComponent;
  let fixture: ComponentFixture<MovieListCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieListCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieListCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
