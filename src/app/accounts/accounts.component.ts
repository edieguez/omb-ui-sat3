import { Component, OnInit } from '@angular/core';

import { Account } from './accounts.model';
import { AccountsService } from './accounts.service';

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
    this.accountsService.getAccountList().subscribe((accounts) => {
      console.log(accounts);
      this.accounts = accounts;
    });
  }
}
