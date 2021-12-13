import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ERROR_NO_FUNDS } from '@app/shared/constants/account-types';
import { Account } from '@app/shared/models/accounts.model';
import { AccountsService } from '@app/shared/services/account/accounts.service';

@Component({
  selector: 'omb-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss'],
})
export class WithdrawalComponent implements OnInit {
  withdrawalForm = new FormGroup({
    account: new FormControl('', [Validators.required]),
    amount: new FormControl(0, [Validators.min(1)]),
  });

  accounts: Account[] = [];
  errorText: string = '';
  successText: string = '';

  constructor(private readonly accountsService: AccountsService) {}

  ngOnInit(): void {
    this.loadAccount();
  }

  loadAccount() {
    this.accountsService.getAccountList().subscribe((accounts: Account[]) => {
      this.accounts = accounts;
    });
  }

  resetTexts() {
    this.errorText = '';
    this.successText = '';
  }

  onSubmit() {
    if (this.withdrawalForm.invalid) return;
    this.resetTexts();

    const {
      account: { id },
      amount,
    } = this.withdrawalForm.value;

    this.accountsService.putWithDrawal(id, { amount }).subscribe(
      () => {
        this.successText = `Amount $${amount} successfully withdrawn`;
        this.withdrawalForm.reset();
        this.loadAccount();
        setTimeout(() => this.resetTexts(), 6000);
      },
      (err) => {
        if (err.error.error === ERROR_NO_FUNDS) {
          this.errorText = 'You do not have enough funds';
        }
      }
    );
  }
}
