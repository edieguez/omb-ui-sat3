import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WithDrawRequest } from '@app/shared/models/withdraw-request';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Account } from '@app//shared/models/accounts.model';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AccountsService {
  private outerUrl = '';

  constructor(private readonly http: HttpClient) {
    this.outerUrl = environment.outerUrl;
  }

  getAccountList(): Observable<Account[]> {
    return this.http.get<{ data: Account[] }>(`${this.outerUrl}/accounts`).pipe(
      map((res) => {
        if (res.data && res.data.length > 0) {
          return res.data;
        }
        return [];
      })
    );
  }

  postAccount(account: Account): Observable<Account[]> {
    return this.http.post<Account[]>(`${this.outerUrl}/accounts`, account);
  }

  getAccount(id: string | null): Observable<Account | null> {
    return this.http
      .get<{ data: Account | null }>(`${this.outerUrl}/accounts/${id}`)
      .pipe(
        map((res) => {
          return res.data ? res.data : null;
        })
      );
  }

  putWithDrawal(
    id: string | null,
    withdrawal: WithDrawRequest
  ): Observable<Account | null> {
    return this.http.put<Account | null>(
      `${this.outerUrl}/accounts/${id}/withdrawal`,
      withdrawal
    );
  }
}
