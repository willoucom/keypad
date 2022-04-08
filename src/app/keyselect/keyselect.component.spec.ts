import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyselectComponent } from './keyselect.component';

describe('KeyselectComponent', () => {
  let component: KeyselectComponent;
  let fixture: ComponentFixture<KeyselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
