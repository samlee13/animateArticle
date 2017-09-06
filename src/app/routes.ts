import { Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {AnimationPageComponent} from './animation-page/animation-page.component';

export const appRoutes = [
  { path: 'home', component: HomePageComponent,
    data: { animation: 'homePage' }
  },

  { path: 'animations', component: AnimationPageComponent,
    data: { animation: 'animationPage' }
  }
];