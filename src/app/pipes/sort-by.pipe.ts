import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform<T extends object>(arr: T[], property: string | symbol, order: 'ASC' | 'DES' = 'ASC'): T[] {
    const isAscending = order === 'ASC' ? 1 : -1;
    return arr.sort((a, b) => isAscending * (a[property] > b[property] ? 1  : -1));
  }

}
