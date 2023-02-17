import { IsInt, IsString } from 'class-validator';

export class CreateSupplierDto {
  @IsInt()
  supplierID: number;
  @IsString()
  supplierName: string;
  @IsString()
  contactName: string;
  @IsString()
  address: string;
  @IsString()
  city: string;
  @IsString()
  postalCode: string;
  @IsString()
  country: string;
  @IsString()
  phone: string;
}
export interface Supplier {
  supplierID: string;
  supplierName: string;
  contactName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
}
