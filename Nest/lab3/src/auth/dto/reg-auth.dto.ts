import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class RegAuthDto {
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsNumber()
    age:number;

    @IsNotEmpty()
    @IsString()
    email:string;

    @IsNotEmpty()
    @IsString()
    password:string;
}
