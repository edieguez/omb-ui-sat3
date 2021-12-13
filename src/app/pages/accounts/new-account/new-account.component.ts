import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { Router } from '@angular/router';

import { ACCOUNT_TYPES } from '../../../shared/constants/account-types';
import { AccountsService } from '../../../shared/services/account/accounts.service';

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

  accountForm = new FormGroup({
    name: new FormControl(''),
    openDate: new FormControl(''),
    currentBalance: new FormControl(''),
    accountType: new FormControl(''),
  });

  ngOnInit(): void {}

  // TODO: agregar el void en las funciones que veas
  onSubmit(): void {
    const acccount = {
      ...this.accountForm.value,
      accountNumber: '100',
      routingNumber: '100',
      openDate: moment(this.accountForm.value.openDate).format('YYYY-MM-DD'),
    };
    console.log('erubiel', JSON.stringify(acccount));
    this.accountService.postAccount(acccount).subscribe((response) => {
      console.log(response);
    });
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
