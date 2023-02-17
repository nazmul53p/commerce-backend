import { IsNumber, IsString } from 'class-validator';

export class CreateOrderDetailDto {
  @IsNumber()
  orderDetailID: number;
  @IsString()
  orderID: string;
  @IsString()
  productID: string;
  @IsString()
  quantity: string;
}
export interface OrderDetail {
  orderDetailID: string;
  orderID: string;
  productID: string;
  quantity: string;
}
