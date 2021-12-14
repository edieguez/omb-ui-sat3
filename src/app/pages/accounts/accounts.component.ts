import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  account: Account | null = null;

  constructor(
    private readonly accountsService: AccountsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.accountsService.getAccountList().subscribe((accounts: any) => {
      this.accounts = accounts;
    });
  }

  onClickRow(row: Account) {
    this.account = row;
    this.router.navigate([`/accounts/detail/${row.id}`]);
  }
}
