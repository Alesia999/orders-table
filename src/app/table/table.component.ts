import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  private readonly dataURL = './assets/data/orders.json';
  orders = [];

  ngOnInit(): void {
    fetch(this.dataURL)
      .then((res) => res.json())
      .then((json) => {
        this.orders = json.response.data;
      });
  }
}
