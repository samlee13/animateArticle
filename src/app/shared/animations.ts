import { trigger, transition, state, style, animate, keyframes, query, animateChild, group }
from '@angular/animations';


export const x= trigger('routeAnimation', [
      transition(':enter', []),
      transition('indexPage <=> profilePage', [
        query('.router-container', style({ position: 'relative '})),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        query(':enter', style({ opacity: 0, transform: 'translateY(400px)' })),
        group([
          query(':leave', animateChild()),
          query('@searchBarAnimation', animateChild()),
        ]),
        group([
          query(':enter', group([
            animate('400ms cubic-bezier(.35,0,.25,1)', style('*')),
            animateChild({ delay: '200ms' })
          ])),
          query(':leave', [
            animate('400ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(-400px)', opacity: 0 }))
          ]),
        ]),
      ])
    ])


    export const fade = trigger('fade', [
        state('visible', style({ opacity: 1 })),
        state('invisible', style({ opacity: 0.1 })),
        transition('visible <=> invisible', animate('2000ms linear'))
    ]);