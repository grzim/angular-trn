import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allValuesForProp'
})
export class AllValuesForPropPipe implements PipeTransform {

    transform<T extends object>(arr: T[] = [], prop: string | symbol): any[] {
    const result = arr[0][prop] !== undefined ? arr : [];
    return result.map(item => item[prop]);
  }

}
