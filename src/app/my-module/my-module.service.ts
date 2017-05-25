import { Injectable } from '@angular/core';

@Injectable()
export class MyModuleService {

  constructor() { }

  myModuleFunction() {
    return 'hello there, this is a mock';
  }

}
