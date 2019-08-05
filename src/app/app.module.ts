import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaiTapModule } from './bai-tap/bai-tap.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaiTapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
