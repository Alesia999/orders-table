import { Component, OnInit } from '@angular/core';
import { AssignedToResponseInterface } from '../models/assigned-to-response.interface';
import { OrderInterface } from '../models/order.interface';
import { OrderResponseInterface } from './../models/order-response.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  private readonly dataURL = './assets/data/orders.json';
  orders!: OrderInterface[];
  searchString: string = '';
  readonly tableColumns: string[] = [
    'WO ID',
    'Description',
    'Received date',
    'Assigned to',
    'Status',
    'Priority',
  ];
  readonly orderProperties: string[] = [
    'id',
    'description',
    'receivedDate',
    'assignedTo',
    'status',
    'priority',
  ];

  ngOnInit() {
    fetch(this.dataURL)
      .then((res) => res.json())
      .then((json) => {
        this.orders = json.response.data.map(
          (order: OrderResponseInterface) => ({
            id: order.work_order_id,
            description: order.description,
            receivedDate: order.received_date,
            assignedTo: order.assigned_to.map(
              (person: AssignedToResponseInterface) => {
                return `${person.person_name} (${person.status})`;
              }
            ),
            status: order.status,
            priority: order.priority,
          })
        );
      });
  }
}
