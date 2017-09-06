import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdButtonModule, MdToolbarModule} from '@angular/material';

import {AppComponent} from './app.component';
import { EaseInComponent } from './ease-in/ease-in.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AnimationPageComponent } from './animation-page/animation-page.component';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    EaseInComponent,
    HomePageComponent,
    AnimationPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,

    MdButtonModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
