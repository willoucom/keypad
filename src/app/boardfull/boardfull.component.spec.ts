import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardfullComponent } from './boardfull.component';

describe('BoardfullComponent', () => {
  let component: BoardfullComponent;
  let fixture: ComponentFixture<BoardfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardfullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
