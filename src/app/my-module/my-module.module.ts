import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyModuleService } from './my-module.service';

@NgModule({
  providers: [
    MyModuleService
  ],
  imports: [
    CommonModule
  ],
  declarations: []
})
export class MyModuleModule { }
