import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyfullComponent } from './keyfull.component';

describe('KeyfullComponent', () => {
  let component: KeyfullComponent;
  let fixture: ComponentFixture<KeyfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyfullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
