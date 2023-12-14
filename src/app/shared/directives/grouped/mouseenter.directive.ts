import { Directive, Input } from '@angular/core';
import { UnderlineDirective } from './underline.directive';
import { BoldDirective } from './bold.directive';

@Directive({
  selector: '[appMouseenter]',
  standalone: true,
  hostDirectives:[   
    {
      directive: UnderlineDirective,
      inputs:['color']
    },
    {
      directive: BoldDirective,
      outputs:['hover']
    }
  ]
})
export class MouseenterDirective {

  constructor() { }

}
