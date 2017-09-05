import { trigger, transition, state, style, animate, keyframes, query, animateChild, group }
from '@angular/animations';

    export const fade = trigger('fade', [
        state('visible', style({ opacity: 1 })),
        state('invisible', style({ opacity: 0.1 })),
        transition('visible <=> invisible', animate('2000ms linear'))
    ]);