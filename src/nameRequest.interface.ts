import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class NameRequestDto {
    @IsString()
    @IsNotEmpty()
    country: string

    @IsString()
    @IsNotEmpty()
    category: string

    @IsString()
    @IsNotEmpty()
    @IsEnum(['male', 'female'])
    gender: string

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    description: string
}