import { TestBed, inject } from '@angular/core/testing';

import { HttpQueryService } from './http-query.service';

describe('HttpQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpQueryService]
    });
  });

  it('should be created', inject([HttpQueryService], (service: HttpQueryService) => {
    expect(service).toBeTruthy();
  }));
});
