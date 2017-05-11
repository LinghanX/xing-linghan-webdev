import { TestBed, inject } from '@angular/core/testing';

import { TestListService } from './test-list.service';

describe('TestListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestListService]
    });
  });

  it('should ...', inject([TestListService], (service: TestListService) => {
    expect(service).toBeTruthy();
  }));
});
