import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDescription',
})
export class SearchDescriptionPipe implements PipeTransform {
  transform(list: any[], filterText: string): any {
    return list
      ? list.filter(
          (item) => item.description.search(new RegExp(filterText, 'i')) > -1
        )
      : [];
  }
}
