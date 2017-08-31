import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdButtonModule, MdToolbarModule} from '@angular/material';

import {AppComponent} from './app.component';
import { EaseInComponent } from './ease-in/ease-in.component';

@NgModule({
  declarations: [
    AppComponent,
    EaseInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    BrowserAnimationsModule,

    MdButtonModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
