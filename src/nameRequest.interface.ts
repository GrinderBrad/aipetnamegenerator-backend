import { IsEnum, IsOptional, IsString } from "class-validator";

export class NameRequestDto {
    @IsString()
    category: string

    @IsString()
    @IsEnum(['MALE', 'FEMALE'])
    gender: string

    @IsString()
    @IsOptional()
    description: string
}