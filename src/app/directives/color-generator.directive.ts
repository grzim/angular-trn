import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {colorGenerator} from '../helpers/generators/color-generator';

@Directive({
  selector: '[appColorGenerator]'
})
export class ColorGeneratorDirective {

  @Input() set appColorGenerator(val) {
    this.vcr.clear();
    const gen = colorGenerator();
    for (let i = 0 ; i < val; i++) {
      this.vcr.createEmbeddedView(this.tpl, {
        $implicit: gen.next().value
      });
    }
  }
  constructor( private vcr: ViewContainerRef, private tpl: TemplateRef<any>) {}
}
