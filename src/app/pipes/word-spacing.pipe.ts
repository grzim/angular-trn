import { Pipe, PipeTransform } from '@angular/core';
import {camelCaseToWordSpacing} from '../helpers/functions/transformations';

@Pipe({
  name: 'wordSpacing'
})
export class WordSpacingPipe implements PipeTransform {

  transform(value: string): string {
    return camelCaseToWordSpacing(value);
  }

}
