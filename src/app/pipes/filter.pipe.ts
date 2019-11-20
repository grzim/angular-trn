import { Pipe, PipeTransform } from '@angular/core';
import {nothing} from '../helpers/symbols';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform<T extends object>(arr: T[], key: string | symbol, value: any): T[] {
    return (key === nothing || value === nothing) ? arr : arr.filter(x => String(x[key]) !== String(value));
  }

}
