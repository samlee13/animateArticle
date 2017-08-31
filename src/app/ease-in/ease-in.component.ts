import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-ease-in',
  templateUrl: './ease-in.component.html',
  animations: [
    trigger('state', [
      state('hidden', style({opacity: 0})),
      state('visible', style({opacity: 1})),
      transition('hidden <=> visible', [
        animate('500ms cubic-bezier(.35,0,.25,1)')
      ])
    ])
  ]
})
export class EaseInComponent implements OnInit {
  @Input() visible = true;

  constructor() {
  }

  ngOnInit() {
  }

}
