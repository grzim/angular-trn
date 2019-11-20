import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'when'
})
export class WhenPipe implements PipeTransform {

  transform(value: any, condition: boolean): any {
    return condition && value;
  }

}
