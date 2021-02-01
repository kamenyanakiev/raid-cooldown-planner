/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RaidCooldownsService } from './raid-cooldowns.service';

describe('Service: RaidCooldowns', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RaidCooldownsService]
    });
  });

  it('should ...', inject([RaidCooldownsService], (service: RaidCooldownsService) => {
    expect(service).toBeTruthy();
  }));
});
