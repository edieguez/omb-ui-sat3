import { Component, Input } from '@angular/core';

import { Account } from '../accounts/accounts.model';
import { DepositService } from './deposit.service';

@Component({
  selector: 'omb-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: [ './deposit.component.scss' ]
})
export class DepositComponent {
  @Input() accounts: Account[] = [];

  amount: number = 0;
  selectedAccountId!: string;

  constructor(private readonly depositService: DepositService) { }

  deposit() {
    if (!this.selectedAccountId) {
      console.error('you must select an account to proceed');
      return;
    }
    this.depositService.deposit(this.selectedAccountId, this.amount).subscribe(ok => {
      if (ok) {
        console.log('transaction succeeded')
      } else {
        console.log('transaction failed')
      }
    })
  }
}
