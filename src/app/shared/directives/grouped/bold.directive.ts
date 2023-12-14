import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appBold]',
  standalone: true
})
export class BoldDirective {

  @Output() hover = new EventEmitter();
  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.fontWeight = 'bold';
    this.hover.emit('hover');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.fontWeight = 'normal';
  }

}
