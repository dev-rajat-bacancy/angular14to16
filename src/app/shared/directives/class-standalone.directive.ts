import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appClassStandalone]',
  standalone: true
})
export class ClassStandaloneDirective {


  @HostBinding("class")
  elementClass = "standalone";

  constructor() { }

}
