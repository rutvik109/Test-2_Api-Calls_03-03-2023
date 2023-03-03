import { TestBed } from '@angular/core/testing';

import { ApiCallsInterceptor } from './api-calls.interceptor';

describe('ApiCallsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiCallsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiCallsInterceptor = TestBed.inject(ApiCallsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
