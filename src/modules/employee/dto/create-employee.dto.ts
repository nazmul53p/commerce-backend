import { IsDate, IsInt, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsInt()
  employeeID: string;
  @IsString()
  lastName: string;
  @IsString()
  firstName: string;
  @IsDate()
  birthDate: Date;
  @IsString()
  photo: string;
  @IsString()
  notes: string;
}
export interface Employee {
  employeeID: number;
  lastName: string;
  firstName: string;
  birthDate: Date;
  photo: string;
  notes: string;
}
