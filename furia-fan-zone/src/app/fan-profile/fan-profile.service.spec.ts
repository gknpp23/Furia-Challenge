import { TestBed } from '@angular/core/testing';

import { FanProfileService } from './fan-profile.service';

describe('FanProfileService', () => {
  let service: FanProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FanProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
