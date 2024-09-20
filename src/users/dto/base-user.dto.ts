import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class BaseUserDto {
    @IsNumber()
    @IsOptional()
    readonly id: number;

    @IsString()
    readonly username: string;

    @IsString()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;

    @IsString()
    @IsOptional()
    readonly confirmPassword: string;
}