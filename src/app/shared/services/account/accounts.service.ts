import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Account } from '../../../shared/models/accounts.model';

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

  // TODO: CHANGE TYPE ANY TO SPECIFIC
  postAccount(account: any): Observable<Account[]> {
    return this.http.post<Account[]>(`${this.outerUrl}/accounts`, account);
  }
}
