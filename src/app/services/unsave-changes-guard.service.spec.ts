import { TestBed, inject } from '@angular/core/testing';

import { UnsaveChangesGuardService } from './unsave-changes-guard.service';

describe('UnsaveChangesGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnsaveChangesGuardService]
    });
  });

  it('should be created', inject([UnsaveChangesGuardService], (service: UnsaveChangesGuardService) => {
    expect(service).toBeTruthy();
  }));
});
