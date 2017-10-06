import { TestBed, inject } from '@angular/core/testing';

import { EdSerService } from './ed-ser.service';

describe('EdSerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EdSerService]
    });
  });

  it('should be created', inject([EdSerService], (service: EdSerService) => {
    expect(service).toBeTruthy();
  }));
});
