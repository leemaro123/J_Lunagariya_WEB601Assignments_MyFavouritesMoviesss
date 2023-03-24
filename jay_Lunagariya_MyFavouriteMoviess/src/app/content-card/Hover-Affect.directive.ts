import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[Hover-Affect]'
})
export class HoverAffectDirective {
  @HostBinding('style.border') border: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.border = '2px solid blue';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.border = null;
  }

  @HostListener('click') onClick() {
    // handle click event here
  }

  constructor() { }
}
