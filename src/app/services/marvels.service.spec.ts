import { TestBed } from '@angular/core/testing';

import { MarvelsService } from './marvels.service';

describe('MarvelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarvelsService = TestBed.get(MarvelsService);
    expect(service).toBeTruthy();
  });
});
