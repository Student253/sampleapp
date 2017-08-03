import { Component } from '@angular/core';
import { trigger,state,style,transition, animate,keyframes } from '@angular/animations';


@Component({
  selector: 'app-root',
  template: 
  `
  	<p [@myAnimation]= 'state' (click)= "animatePara()"> Hello! Click me</p>

  `,
  styles: [`
  p {
  	width:400px;
  	margin: 200px auto;
  	font-size: 6em;
  }

  `],
  animations : [

  trigger('myAnimation', [
  	state ('little', style({
  		transform: 'scale(1)',
  	})),

  	state ('large', style({
  		transform: 'scale(1.2)',
  	})),
  	transition ('little <=> large', animate('1500ms ease-in')),

  	]),

  ]
})
export class AppComponent {
  title = 'app';

  state: string = 'little';

  animatePara() {
  	this.state = (this.state === 'little' ? 'large': 'little');
  }
}
