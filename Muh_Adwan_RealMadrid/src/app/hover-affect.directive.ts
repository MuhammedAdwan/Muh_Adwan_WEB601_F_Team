import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
    //this is a directive that will be used to change the border of the element when the mouse is over it
  @Input() hoverStyle: string = '';

  //constructor to get the element and the renderer
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  //when the mouse clicks on the element, the border will change to the hoverStyle
  @HostListener('mouseenter') onMouseEnter() {
    if(this.elementRef.nativeElement.getAttribute('appHoverAffect').includes('underline')){
      this.renderer.setStyle(this.elementRef.nativeElement,'text-decoration','underline');
    } 
  else if(this.elementRef.nativeElement.getAttribute('appHoverAffect').includes('bold')){
    this.renderer.setStyle(this.elementRef.nativeElement,'font-weight','bold');
  }  
  else if(this.elementRef.nativeElement.getAttribute('appHoverAffect').includes('border')){
    this.renderer.setStyle(this.elementRef.nativeElement,'border','2px solid black');
  } 
}

  @HostListener('mouseleave') onMouseLeave() {
    if(this.elementRef.nativeElement.getAttribute('appHoverAffect').includes('underline')){
      this.renderer.removeStyle(this.elementRef.nativeElement,'text-decoration');
    } 
    else if(this.elementRef.nativeElement.getAttribute('appHoverAffect').includes('bold')){
      this.renderer.removeStyle(this.elementRef.nativeElement,'font-weight');
    }  
    else if(this.elementRef.nativeElement.getAttribute('appHoverAffect').includes('border')){
      this.renderer.removeStyle(this.elementRef.nativeElement,'border');
    } 
  }
//function to apply the style to the element
  // private applyStyle(style: string) {
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'border', style);
  // }
}
