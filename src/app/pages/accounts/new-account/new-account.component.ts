import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Router } from '@angular/router';

import { ACCOUNT_TYPES } from '@app/shared/constants/account-types';
import { ACCOUNT_FORMAT_DATE } from '@app/shared/constants/helpers';
import { AccountsService } from '@app/shared/services/account/accounts.service';
import { isAdultValidator } from '@app/shared/validators/isAdult/isAdult.directive';

// jasmine / karma
@Component({
  selector: 'omb-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
})
export class NewAccountComponent implements OnInit {
  constructor(
    private readonly accountService: AccountsService,
    private router: Router
  ) {}

  accountTypes: Array<string> = ACCOUNT_TYPES;
  submitError: string = '';

  accountForm = new FormGroup({
    accountType: new FormControl('', [
      Validators.required,
      Validators.pattern(/(CHECKING|SAVINGS|MONEY_MARKET)/),
    ]),
    name: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [
      Validators.required,
      isAdultValidator('dateOfBirth'),
    ]),
    currentBalance: new FormControl(0, [Validators.min(0)]),
    openDate: new FormControl('', [Validators.required]),
    accountNumber: new FormControl('', [Validators.required]),
    routingNumber: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  // TODO: agregar el void en las funciones que veas
  onSubmit(): void {
    if (this.accountForm.invalid) {
      return;
    }
    const acccount = {
      ...this.accountForm.value,
      openDate: moment(this.accountForm.value.openDate).format(
        ACCOUNT_FORMAT_DATE
      ),
      dateOfBirth: moment(this.accountForm.value.dateOfBirth).format(
        ACCOUNT_FORMAT_DATE
      ),
    };
    this.accountService.postAccount(acccount).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error: any) => {
        this.submitError = error.message;
      }
    );
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
