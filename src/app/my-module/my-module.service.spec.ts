/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyModuleService } from './my-module.service';

describe('MyModuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyModuleService]
    });
  });

  it('should ...', inject([MyModuleService], (service: MyModuleService) => {
    expect(service).toBeTruthy();
  }));
});
