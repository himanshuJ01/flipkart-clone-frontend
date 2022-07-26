import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { CustomerService } from '../services/customer/customer.service';

import { CustomerLoginComponent } from './customer-login.component';

describe('CustomerLoginComponent', () => {
  let component: CustomerLoginComponent;
  let fixture: ComponentFixture<CustomerLoginComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [ CustomerLoginComponent ],
      imports: [HttpClientTestingModule]
    })
    //.compileComponents();
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  it('should create : CustomerService',inject([CustomerService],  (service: CustomerService) => {
    expect(service).toBeTruthy();
  }));
  it('testing html',() => {
    const data=fixture.nativeElement;
    expect(data.querySelector(".title").textContent).toContain("Customer Login")
  })
});
