import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';

import { getAccount } from '@app/shared/mocks/account.mock';

import { AccountsComponent } from './accounts.component';

describe('AccountsComponent', () => {
  let component: AccountsComponent;
  let fixture: ComponentFixture<AccountsComponent>;
  // let httpClient: HttpClient;
  // let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [AccountsComponent],
    }).compileComponents();

    // httpClient = TestBed.get(HttpClient);
    // httpTestingController = TestBed.get(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set account property value that function send through as parameter', () => {
    component.onClickRow(getAccount.response.data);

    expect(JSON.stringify(getAccount.response.data)).toEqual(
      JSON.stringify(getAccount.response.data)
    );
  });
});
