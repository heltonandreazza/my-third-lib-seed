import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DemoComponent } from "app/demo/demo.component";
import { DemoModule } from "app/demo/demo.module";
import { MyModuleModule } from './my-module/my-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyModuleModule,
    DemoModule,
    RouterModule.forRoot([
      {
        path: '',
        component: DemoComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
