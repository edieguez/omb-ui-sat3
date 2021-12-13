import { Component, OnInit } from '@angular/core';

import { Account } from '@app/shared/models/accounts.model';
import { AccountsService } from '@app/shared/services/account/accounts.service';

@Component({
  selector: 'omb-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  accounts: Account[] = [];

  constructor(private readonly accountsService: AccountsService) {}

  ngOnInit(): void {
    this.accountsService.getAccountList().subscribe((accounts: any) => {
      this.accounts = accounts;
    });
  }
}
