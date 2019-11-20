import { Pipe, PipeTransform } from '@angular/core';
import {unique} from '../helpers/functions/transformations';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(arr: any[]): any[] {
    return unique(arr);
  }

}
