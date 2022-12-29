import { TestBed } from '@angular/core/testing';

import { ChangeStatsService } from './change-stats.service';

describe('ChangeStatsService', () => {
  let service: ChangeStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
