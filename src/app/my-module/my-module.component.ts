import { Component, OnInit } from '@angular/core';

import { MyModuleService } from './my-module.service';

@Component({
  selector: 'app-my-module',
  templateUrl: './my-module.component.html',
  styleUrls: ['./my-module.component.css']
})
export class MyModuleComponent implements OnInit {
  helloThere: any;

  constructor(private myModuleService: MyModuleService) { }

  ngOnInit() {
    this.helloThere = this.myModuleService.myModuleFunction();
  }

}
