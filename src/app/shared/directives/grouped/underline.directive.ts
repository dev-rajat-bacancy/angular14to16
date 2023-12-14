import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appUnderline]',
  standalone: true
})
export class UnderlineDirective {
  @Input() color = 'black';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.textDecoration = 'underline';
    this.el.nativeElement.style.textDecorationColor = this.color;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.textDecoration = 'none';
    this.el.nativeElement.style.textDecorationColor = '';
  }

}
