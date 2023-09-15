import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieFormComponent } from './add-movie-form.component';

describe('AddMovieFormComponent', () => {
  let component: AddMovieFormComponent;
  let fixture: ComponentFixture<AddMovieFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMovieFormComponent]
    });
    fixture = TestBed.createComponent(AddMovieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
