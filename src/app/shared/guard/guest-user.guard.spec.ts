import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guestUserGuard } from './guest-user.guard';

describe('guestUserGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guestUserGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
