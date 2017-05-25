import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyModuleModule } from './my-module/my-module.module';
import { MyModuleComponent } from './my-module/my-module.component';

@NgModule({
  declarations: [
    AppComponent,
    MyModuleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
