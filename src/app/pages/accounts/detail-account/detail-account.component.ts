import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '@app/shared/models/accounts.model';
import { AccountsService } from '@app/shared/services/account/accounts.service';

@Component({
  selector: 'omb-detail-account',
  templateUrl: './detail-account.component.html',
  styleUrls: ['./detail-account.component.scss'],
})
export class DetailAccountComponent implements OnInit {
  id: string | null = null;
  account: Account | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private srvAccount: AccountsService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.srvAccount.getAccount(this.id).subscribe((res) => {
      this.account = res;
    });
  }

  onGoBack() {
    this.router.navigate(['/']);
  }
}
