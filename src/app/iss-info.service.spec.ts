import { TestBed } from '@angular/core/testing';

import { IssInfoService } from './iss-info.service';

describe('IssInfoService', () => {
  let service: IssInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
