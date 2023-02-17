import { IsDate, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  orderID: number;
  @IsNumber()
  customerID: string;
  @IsNumber()
  employeeID: string;
  @IsDate()
  orderDate: Date;
  @IsNumber()
  shipperID: string;
}
export interface Order {
  orderID: number;
  customerID: string;
  employeeID: string;
  orderDate: Date;
  shipperID: string;
}
