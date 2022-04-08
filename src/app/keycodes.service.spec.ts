import { TestBed } from '@angular/core/testing';

import { KeycodesService } from './keycodes.service';

describe('KeycodesService', () => {
  let service: KeycodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeycodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
