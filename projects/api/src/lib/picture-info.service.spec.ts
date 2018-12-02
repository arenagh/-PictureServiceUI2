import { TestBed } from '@angular/core/testing';

import { PictureInfoService } from './picture-info.service';

describe('PictureInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PictureInfoService = TestBed.get(PictureInfoService);
    expect(service).toBeTruthy();
  });
});
