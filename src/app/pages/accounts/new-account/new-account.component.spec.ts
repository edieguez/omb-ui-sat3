import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';

import { NewAccountComponent } from './new-account.component';
import { Account } from '@app/shared/models/accounts.model';
import { getAccount } from '@app/shared/mocks/account.mock';

describe('NewAccountComponent', () => {
  let component: NewAccountComponent;
  let fixture: ComponentFixture<NewAccountComponent>;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewAccountComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    httpClient = TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accountForm be invalid when onSubmit is executed', () => {
    component.onSubmit();

    expect(component.accountForm.invalid).toBeTruthy();
  });

  it('should accountForm be valid', () => {
    const account: Account = getAccount.response.data;

    component.accountForm.controls['accountType'].setValue(account.accountType);
    component.accountForm.controls['name'].setValue(account.name);
    component.accountForm.controls['currentBalance'].setValue(
      account.currentBalance
    );
    component.accountForm.controls['openDate'].setValue(account.openDate);
    component.accountForm.controls['dateOfBirth'].setValue(account.dateOfBirth);
    component.accountForm.controls['accountNumber'].setValue(
      account.accountNumber
    );
    component.accountForm.controls['routingNumber'].setValue(
      account.routingNumber
    );

    component.onSubmit();

    expect(component.accountForm.invalid).toBeFalsy();
  });

  it('should execute onCancel and navigate', () => {
    component.onCancel();
  });
});
