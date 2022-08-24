import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDescription',
})
export class SearchDescriptionPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): any {
    if (!args) {
      return value;
    }
    return value.filter((value: any) => {
      return value.description.toLocaleLowerCase().includes(args);
    });
  }
}
