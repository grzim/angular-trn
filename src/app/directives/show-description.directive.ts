import {Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appShowDescription]'
})
export class ShowDescriptionDirective implements OnInit, OnChanges {

  @Input() appShowDescription: string;
  private node = document.createElement('div');

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.appendChild(this.el.nativeElement, this.node);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeChild(this.el.nativeElement, this.node);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }


  ngOnChanges() {
    this.node.innerText = this.appShowDescription;
  }

  ngOnInit() {
    this.node.innerText = this.appShowDescription;
  }


}
