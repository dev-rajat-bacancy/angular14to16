import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {


  @HostBinding("class")
  elementClass = "normal";

  constructor() { }

}
