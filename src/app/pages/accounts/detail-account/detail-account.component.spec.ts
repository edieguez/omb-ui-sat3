import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { DetailAccountComponent } from './detail-account.component';

describe('DetailAccountComponent', () => {
  let component: DetailAccountComponent;
  let fixture: ComponentFixture<DetailAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailAccountComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute onGoBack and execute navigate function', () => {
    component.onGoBack();
  });
});
