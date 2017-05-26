import { Component, OnInit } from '@angular/core';
import { MyModuleService } from "app/my-module/my-module.service";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  hello: string;

  constructor(private myModuleService: MyModuleService) { }

  ngOnInit() {
    this.hello = this.myModuleService.myModuleFunction();
  }

}
