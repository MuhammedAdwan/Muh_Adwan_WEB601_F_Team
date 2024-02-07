import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input() hoverStyle: string = '';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.applyStyle(this.hoverStyle);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.applyStyle('');
  }

  private applyStyle(style: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', style);
  }
}
