
import {HomePageComponent} from './home-page/home-page.component';
import {AboutPageComponent} from './about-page/about-page.component';

export const ROUTES = [
  { path: '', component: HomePageComponent,
    data: { animation: 'homePage' }
  },

  { path: '/about', component: AboutPageComponent,
    data: { animation: 'aboutPage' }
  }
];