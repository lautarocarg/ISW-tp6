import { TestBed } from '@angular/core/testing';

import { SharedImagesDataService } from './shared-images-data.service';

describe('SharedImagesDataService', () => {
  let service: SharedImagesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedImagesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
