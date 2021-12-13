import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'omb-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onCreateAccount() {
    this.router.navigate(['/accounts/create']);
  }

  onAccounts() {
    this.router.navigate(['/']);
  }
}
