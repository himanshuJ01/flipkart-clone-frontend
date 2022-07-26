import { HttpClient } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { CustomerRegistrationComponent } from './customer-registration.component';
import {  HttpClientTestingModule } from '@angular/common/http/testing';
import { CustomerService } from '../services/customer/customer.service';


describe('CustomerRegistrationComponent', () => {
  let component: CustomerRegistrationComponent;
  let fixture: ComponentFixture<CustomerRegistrationComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRegistrationComponent ],
      imports: [HttpClientTestingModule]
    });
    //.compileComponents();
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create : ProductService',inject([CustomerService],  (service: CustomerService) => {
    expect(service).toBeTruthy();
  }));
  it('testing html',() => {
    const data=fixture.nativeElement;
    expect(data.querySelector(".title").textContent).toContain("Customer Registration")
  })
  
  
});
