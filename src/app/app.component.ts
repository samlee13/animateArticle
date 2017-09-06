import {Component, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute, RouterOutlet, NavigationEnd, NavigationStart} from '@angular/router';
import {animation, animateChild, trigger, group, transition, animate, style, query} from '@angular/animations';

import { fade, grow, flyInOut} from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fade, grow, flyInOut ]
})


export class AppComponent {
  visible = true;
  title = 'Let\'s do this!';

  state: string = 'small';
 
  grow(state){
    this.state = (this.state === 'small' ? 'large' : 'small');
  }


  flyInOut(state){
    this.state = (this.state === 'in' ? 'out' : 'in');
  }


  fade(state){
    this.state = (this.state === 'visible' ? 'invisible' : 'visible');
  }
}
