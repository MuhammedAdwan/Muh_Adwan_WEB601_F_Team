import { TestBed } from '@angular/core/testing';

import { RealMadridService } from './real-madrid.service';

describe('RealMadridService', () => {
  let service: RealMadridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealMadridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
