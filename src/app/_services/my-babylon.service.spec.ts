import { TestBed } from '@angular/core/testing';

import { MyBabylonService } from './my-babylon.service';

describe('MyBabylonService', () => {
  let service: MyBabylonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyBabylonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
