import { AssignedToResponseInterface } from './assigned-to-response.interface';

export interface OrderResponseInterface {
  work_order_id: number;
  description: string;
  received_date: string;
  assigned_to: AssignedToResponseInterface[];
  status: string;
  priority: string;
}
