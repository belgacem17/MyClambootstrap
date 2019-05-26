import { TestBed } from '@angular/core/testing';

import { MyclamService } from './myclam.service';

describe('MyclamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyclamService = TestBed.get(MyclamService);
    expect(service).toBeTruthy();
  });
});
