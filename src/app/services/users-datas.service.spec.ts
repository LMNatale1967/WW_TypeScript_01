import { TestBed } from '@angular/core/testing';

import { UsersDatasService } from './users-datas.service';

describe('UsersDatasService', () => {
  let service: UsersDatasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersDatasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
