import {Component, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute, RouterOutlet, NavigationEnd, NavigationStart} from '@angular/router';
import {animation, animateChild, trigger, group, transition, animate, style, query} from '@angular/animations';

import { fade, x } from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fade, x ]
})


export class AppComponent {
  visible = true;
  title = 'Let\'s do this!';

  state: string = 'small';
 
  fade(state){
    console.log("it works3");
    this.state = (this.state === 'visible' ? 'invisible' : 'visible');
  }
}
