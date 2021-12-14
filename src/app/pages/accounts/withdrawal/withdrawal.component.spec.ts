import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Account } from '@app/shared/models/accounts.model';
import * as AccountMocks from '@app/shared/mocks/account.mock';

import { WithdrawalComponent } from './withdrawal.component';

describe('WithdrawalComponent', () => {
  let component: WithdrawalComponent;
  let fixture: ComponentFixture<WithdrawalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WithdrawalComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set errorText and successText an empty string after resetText execution', () => {
    component.resetTexts();

    expect(component.errorText).toEqual('');
    expect(component.successText).toEqual('');
  });

  it('should execute onSubmit function', () => {
    const account: Account = AccountMocks.getAccount.response.data;

    component.withdrawalForm.controls['account'].setValue(account);
    component.withdrawalForm.controls['amount'].setValue(100);

    component.onSubmit();
  });

  it('should withDrawalForm be invalid ', () => {
    component.onSubmit();

    expect(component.withdrawalForm.invalid).toBe(true);
  });
});
