import { IsInt, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsInt()
  categoryID: string;
  @IsString()
  categoryName: string;
  @IsString()
  categoryDescription: string;
}

export interface Category {
  categoryID: number;
  categoryName: string;
  categoryDescription: string;
}
