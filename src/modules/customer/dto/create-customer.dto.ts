import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCustomerDto {
    @ApiProperty({ required: false, example: 1 })
    @IsInt()
    @IsOptional()
    customerId: number;

    @ApiProperty({ example: 'wolski91@gmail.com' })
    @IsEmail()
    @IsNotEmpty()
    customerEmail: string;

    @ApiProperty({ example: 'Wolski' })
    @IsNotEmpty()
    @IsString()
    customerName: string;

    @ApiProperty({ example: 123456789 })
    @IsNotEmpty()
    @IsNumber()
    customerPhone: number;

    @ApiProperty({ example: 'ul. Filtrowa 68' })
    @IsNotEmpty()
    @IsString()
    customerAddress: string;

    @ApiProperty({ example: 'Walla' })
    @IsNotEmpty()
    @IsString()
    customerCity: string;

    @ApiProperty({ required: false, example: '01-012' })
    @IsNotEmpty()
    @IsString()
    customerPostalCode: string;

    @ApiProperty({ example: 'Poland' })
    @IsNotEmpty()
    @IsString()
    customerCountry: string;

    @ApiProperty({ example: '123456' })
    @IsNotEmpty()
    @IsString()
    customerPassword: string;
}

export interface Customer {
    customerID: number;
    customerName: string;
    customerPhone: string;
    customerAddress: string;
    customerCity: string;
    customerPostalCode: string;
    customerCountry: string;
    customerPassword?: string;
    isActive?: boolean;
}
