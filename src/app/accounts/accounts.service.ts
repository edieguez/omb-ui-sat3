import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Account } from './accounts.model';

@Injectable({ providedIn: 'root' })
export class AccountsService {
  private outerUrl = '';

  constructor(private readonly http: HttpClient) {
    this.outerUrl = environment.outerUrl;
  }

  getAccountList(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.outerUrl}/accounts`);
  }
}
