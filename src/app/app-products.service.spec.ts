import { TestBed } from '@angular/core/testing';

import { AppProductsService } from './app-products.service';

describe('AppProductsService', () => {
  let service: AppProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
