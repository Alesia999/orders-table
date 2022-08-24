import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  searchString: string = '';
  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  search(value: string) {
    this.onSearch.emit(value);
  }
}
