import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountsComponent } from './pages/accounts/accounts.component';
import { NewAccountComponent } from './pages/accounts/new-account/new-account.component';
import { DetailAccountComponent } from './pages/accounts/detail-account/detail-account.component';
import { WithdrawalComponent } from './pages/accounts/withdrawal/withdrawal.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: AccountsComponent },
  { path: 'accounts/create', component: NewAccountComponent },
  { path: 'accounts/detail/:id', component: DetailAccountComponent },
  { path: 'accounts/withdraw', component: WithdrawalComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
