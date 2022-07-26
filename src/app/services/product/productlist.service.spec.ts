import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ProductlistService } from './productlist.service';

describe('ProductlistService', () => {
  let service: ProductlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule ],
});
    service = TestBed.inject(ProductlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
