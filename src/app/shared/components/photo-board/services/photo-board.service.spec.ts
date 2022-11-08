import { TestBed } from '@angular/core/testing';

import { PhotoBoardService } from './photo-board.service';

describe('PhotoBoardService', () => {
  let service: PhotoBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
