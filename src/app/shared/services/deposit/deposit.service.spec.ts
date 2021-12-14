import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DepositService } from './deposit.service';

describe('DepositService', () => {
  let service: DepositService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DepositService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should execute deposit', () => {
    const accountId = '12333';
    const amount = 10000;
    service.deposit(accountId, amount);

    expect(service).toBeTruthy();
  });
});
