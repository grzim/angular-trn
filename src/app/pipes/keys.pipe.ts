import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform<T extends object>(input: T | T[]): string[] {
    const obj = Array.isArray(input) ? input[0] : input;
    return Object.keys(obj || []);
  }

}
