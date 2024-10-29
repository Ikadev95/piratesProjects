import { TestBed } from '@angular/core/testing';

import { ChePirataSeiService } from './che-pirata-sei.service';

describe('ChePirataSeiService', () => {
  let service: ChePirataSeiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChePirataSeiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
