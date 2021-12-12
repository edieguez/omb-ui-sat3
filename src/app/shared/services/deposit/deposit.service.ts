import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DepositService {
  private outerUrl = '';

  constructor(private readonly http: HttpClient) {
    this.outerUrl = environment.outerUrl;
  }

  deposit(accountId: string, amount: number): Observable<boolean> {
    console.log(
      `depositing ${amount} dollars in account with ID '${accountId}'`
    );
    return this.http.post<boolean>(
      `${this.outerUrl}/accounts/${accountId}/deposit`,
      { amount }
    );
  }
}
