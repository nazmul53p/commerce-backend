import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNumber()
  productID: number;
  @IsString()
  productName: string;
  @IsNumber()
  supplierID: number;
  @IsNumber()
  categoryID: number;
  @IsString()
  unit: string;
  @IsString()
  productPrice: string;
}
export interface Product {
  productID: number;
  productName: string;
  supplierID: number;
  categoryID: number;
  unit: string;
  productPrice: string;
}
