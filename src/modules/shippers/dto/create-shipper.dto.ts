import { IsNumber, IsString } from 'class-validator';

export class CreateShipperDto {
  @IsNumber()
  shipperID: number;
  @IsString()
  shipperName: string;
  @IsString()
  phone: string;
}
export interface Shipper {
  shipperID: string;
  shipperName: string;
  phone: string;
}
