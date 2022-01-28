import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSlideComponent } from './theme-slide.component';

describe('ThemeSlideComponent', () => {
  let component: ThemeSlideComponent;
  let fixture: ComponentFixture<ThemeSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
