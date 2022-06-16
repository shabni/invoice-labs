import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

const EXPANSION_PANEL_ANIMATION_TIMING = '1000ms cubic-bezier(0.4,0.0,0.2,1)';

const expansion = trigger('expansion', [
  state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
  state('expanded', style({ height: '*', visibility: 'visible' })),
  transition(
    'expanded <=> collapsed, void => collapsed',
    animate(EXPANSION_PANEL_ANIMATION_TIMING)
  ),
]);



@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [expansion],

})
export class ContentComponent {

  show = true;
  toggleBody() {
    this.show = !this.show;
  }

  getState() {
    return this.show ? 'expanded' : 'collapsed';
  }

}
